from argparse import ArgumentParser
import requests
import json
import re

# This script calls the touchpoint API to retrieve survey results for the provided document (form_id)
# You will need to use your own Touchpoint API key:
# touchpoint.py <form_id> <api_key> <start_date> <end_date>
# if you want to save to the default file (touchpoint.csv), use the -p flag.



MAX_PAGES = 500 # this can be changed to throttle if needed
CSV_HEADER = 'id, date, referer, user agent, page, raw answer, language, english answer\n'

def parse_args():
    parser = ArgumentParser(
        fromfile_prefix_chars="@", prog='Touchpoint Parser',
        description='Parse specific results from a Touchpoint form',
        epilog='Now, be off and about your business!', conflict_handler='error', add_help=True
    )
    parser.add_argument("form_id")
    parser.add_argument("apikey")
    parser.add_argument("start_date")
    parser.add_argument("end_date")
    parser.add_argument("filename")
    parser.add_argument("-s", "--show", action="store_true") # to print results to console
    parser.add_argument("-p", "--persist", action="store_true") # to save the results to the filename provided
    return parser.parse_args()

def make_single_call(base_url, page_number, start_date, end_date, api_key):
    try:
        response = requests.get(
            f'{base_url}{page_number}&start_date={start_date}&end_date={end_date}',
            headers={'X-Api-Key': api_key}
        )
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error making API request: {e}")
        return None

def strip_language(source):
    if '/es/' in source:
        return 'es'
    elif '/fr/' in source:
        return 'fr'
    else:
        return 'en'

def translate(response):
    translation_dict = {
        'Si': 'yes', 'si': 'yes', 'yes': 'yes', 'Yes': 'yes', 'Oui': 'yes', 'no': 'no', 'Non': 'no', 'No': 'no',
        '是的': 'yes', '是': 'yes', '否': 'no', '不': 'no', 'はい': 'yes', '예': 'yes', '아니오': 'no', 'បាទ': 'yes',
        'ไม่ใช่': 'no', 'ใช่': 'yes', 'না': 'no', 'हां': 'yes', 'नहीं': 'no', 'نعم': 'yes', 'لا': 'no',
        'خیر': 'yes', 'بەڵێ': 'yes', 'بله': 'yes', 'أوي': 'yes', 'Нет': 'no', 'НЕТ': 'no', 'Да': 'yes', 'ДA': 'yes',
        'Ναι': 'yes', 'Hayır': 'no'
    }
    return translation_dict.get(response, 'err')

def process_data(form_id, api_key, start_date, end_date):
    base_url = f'https://api.gsa.gov/analytics/touchpoints/v1/forms/{form_id}.json?size=500&page='
    final_result = CSV_HEADER

    for page in range(1, MAX_PAGES + 1):
        result = make_single_call(base_url, page, start_date, end_date, api_key)

        included = result.get('included', [])
        if not 'included' in result:
            print('hit last page, exiting')
            break

        for data in included:
            submission_id = str(data['id'])
            attrs = data['attributes']
            user_agent = attrs['user_agent'].replace(',', ' ')
            language = strip_language(attrs['page'])
            translated_answer = translate(attrs['answer_01'].strip())
            updated_at = attrs['updated_at'][:10]
            new_line = f'{submission_id},{updated_at},{attrs["referer"]},{user_agent},{attrs["page"]},' \
                       f'{attrs["answer_01"]},{language},{translated_answer}\n'
            final_result += new_line

        print(f'Processed page {page}/{MAX_PAGES}')

    return final_result

def save_data_to_csv(data, filename, persist):
    if persist:
        with open(filename, 'w') as text_file:
            text_file.write(data)
        print('Data written to touchpoint.csv')

def show_data(data, show):
    if show:
        print(data)

def main():
    args = parse_args()
    data = process_data(args.form_id, args.apikey, args.start_date, args.end_date)
    save_data_to_csv(data, args.filename, args.persist)
    show_data(data, args.show)

if __name__ == "__main__":
    main()

