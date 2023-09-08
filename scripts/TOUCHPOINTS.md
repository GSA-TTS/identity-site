*WHAT IS THIS?*
This temporary script is meant as a stopgap to allow a person with a Touchpoint API Key to download results from a survey to their local device. The downloaded data can be used to for in-depth discovery of survey results.

*HOW TO USE IT*
In the _touchpoint.yml file, enter the form id you wish to retrieve results for as well as your API Key. Change the filename if you don't want to overwrite it.

1. Modify _touchpoint.yml
2. Run the script: ruby touchpoint.rb

**_touchpoint.yml**
form_id: The form you want results from
api_key: Your API key
start_date: Date starting of results you want
end_date: Non-inclusive date
filename: Target save name for csv file
base_url: 'https://api.gsa.gov/analytics/touchpoints/v1/forms/'
max_pages: Max number of pages to receive (# of calls to the API maximum)
languages: The supported languages on the help site (en is assumed)

*WHAT HAPPENS?*
The script will call the API endpoint up to max_pages as defined in the config file. Each call to the endpoint will receive up to 500 individual results. These are converted into a csv entry in the file when saved.

The end_date value is non-inclusive, so if you provide an end date, it actually stops at 11:59:50 the day prior. If you use the same start and end date, there will be no results.

*COLUMNS*
_id_: The response ID of the survey result.
_date_: Date on which the result was submitted, the TIME has been removed to make it easier to create graphs in a spreadsheet.
_referer_: The page or site that is associated with the help page.
_user agent_: Visiting device.
_page_: The help page that is the subject of the survey answer.
_raw answer_: Untranslated response to the yes/no survey. Since mobile devices can translate on the fly, this value can vary wildly.
_language_: This is scraped from the page and is relevant for comparing data for specifically supported languages (fr, en, es).
_english answer_: Translated from the raw language (not all are captured) to yes/no. For those languages not specifically being translated, the value 'err' is used instead of yes or no.