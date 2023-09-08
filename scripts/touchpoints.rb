require 'optparse'
require 'rest-client'
require 'json'
require 'yaml'

API_CONFIG = YAML.load_file('_touchpoints.yml')
MAX_PAGES = API_CONFIG['max_pages']
CSV_HEADER = "id, date, referer, user agent, page, raw answer, language, english answer\n"

def parse_args
   options = {}

   options[:form_id]=API_CONFIG['form_id']
   options[:api_key]=API_CONFIG['api_key']
   options[:start_date]=API_CONFIG['start_date']
   options[:end_date]=API_CONFIG['end_date']
   options[:filename]=API_CONFIG['filename']
   options[:base_url]=API_CONFIG['base_url']

   options
end

def make_single_call(base_url, page_number, start_date, end_date, api_key)
  begin
    response = RestClient.get(
      "#{base_url}#{page_number}&start_date=#{start_date}&end_date=#{end_date}",
      { 'X-Api-Key' => api_key }
    )
    JSON.parse(response.body)
  rescue RestClient::ExceptionWithResponse => e
    puts "Error making API request: #{e.message}"
    nil
  end
end

def get_language(source)
  match = API_CONFIG['languages'].find {|lang| source.include?("/#{lang}/")}
  return match if match
  return 'en'
end

def translate(response)
  translation_dict = {
    'Si' => 'yes', 'si' => 'yes', 'yes' => 'yes', 'Yes' => 'yes', 'Oui' => 'yes', 'no' => 'no', 'Non' => 'no',
    'No' => 'no', '是的' => 'yes', '是' => 'yes', '否' => 'no', '不' => 'no', 'はい' => 'yes', '예' => 'yes',
    '아니오' => 'no', 'បាទ' => 'yes', 'ไม่ใช่' => 'no', 'ใช่' => 'yes', 'না' => 'no', 'हां' => 'yes',
    'नहीं' => 'no', 'نعم' => 'yes', 'لا' => 'no', 'خیر' => 'yes', 'بەڵێ' => 'yes', 'بله' => 'yes',
    'أوي' => 'yes', 'Нет' => 'no', 'НЕТ' => 'no', 'Да' => 'yes', 'ДA' => 'yes', 'Ναι' => 'yes',
    'Hayır' => 'no'
  }
  translation_dict[response] || 'err'
end

def process_data(form_id, api_key, start_date, end_date)
  base_url = "#{API_CONFIG['base_url']}#{form_id}.json?size=500&page="
  final_result = CSV_HEADER

  (1..MAX_PAGES).each do |page|
    result = make_single_call(base_url, page, start_date, end_date, api_key)

    included = result['included'] || []
    break if included.empty?

    included.each do |data|
      submission_id = data['id'].to_s
      attrs = data['attributes']
      user_agent = attrs['user_agent'].gsub(',', ' ')
      language = get_language(attrs['page'])
      translated_answer = translate(attrs['answer_01'].strip)
      updated_at = attrs['updated_at'][0..9]
      new_line = "#{submission_id},#{updated_at},#{attrs['referer']},#{user_agent},#{attrs['page']},\
                  #{attrs['answer_01']},#{language},#{translated_answer}\n"
      final_result += new_line
    end

    puts "Received page #{page}/#{MAX_PAGES}"
  end

  final_result
end

def save_data_to_csv(data, filename)
  File.open(filename, 'w') { |file| file.write(data) }
  puts "Data written to #{filename}"
end

def main
  options = parse_args
  data = process_data(options[:form_id], options[:api_key], options[:start_date], options[:end_date])
  save_data_to_csv(data, options[:filename])
end

if __FILE__ == $PROGRAM_NAME
  main
end

