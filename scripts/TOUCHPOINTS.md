# Touchpoints script

## What is this?

This temporary script is meant as a stopgap to allow a person with a Touchpoint
API Key to download results from a survey to their local device. The downloaded
data can be used for in-depth discovery of survey results.

## How to use it

### Modify `_touchpoint.yml`

In the `_touchpoint.yml` file, enter the form id you wish to retrieve results for
as well as your API Key. Change the `filename` if you don't want to overwrite
the output from the last time you ran the script. Modify the other variables as
needed:

- `form_id`: The form you want results from
- `api_key`: Your API key
- `start_date`: Date starting of results you want
- `end_date`: Non-inclusive date
- `filename`: Target save name for csv file
- `base_url`: 'https://api.gsa.gov/analytics/touchpoints/v1/forms/'
- `max_pages`: Max number of pages to receive (# of calls to the API maximum)
- `languages`: The supported languages on the help site (en is assumed)

### Run the script

```bash
ruby touchpoint.rb
```

## What happens?

The script will call the API endpoint up to `max_pages` as defined in the config
file. Each call to the endpoint will retrieve up to 500 individual results. These
are converted into csv and appended to the output file.

The `end_date` value is non-inclusive, so if you provide an end date, it actually
stops at 11:59:50 the day prior. If you use the same start and end date, there
will be no results.

## Columns in the output csv file

- `id`: The response ID of the survey result.
- `date`: Date on which the result was submitted, the time has been removed to
  make it easier to create graphs in a spreadsheet.
- `referer`: The page or site that is associated with the help page.
- `user agent`: The visiting device.
- `page`: The help page that is the subject of the survey answer.
- `raw answer`: The untranslated response to the yes/no survey. Since mobile devices
  can translate on the fly, this value can vary wildly.
- `language`: This is scraped from the page and is relevant for comparing data
  for specifically supported languages (`'fr'`, `'en'`, `'es'`).
- `english answer`: Translated from the raw language (not all are captured) to
  `'yes'`/`'no'`. For those languages not specifically being translated, the value `'err'`
  is used instead of `'yes'` or `'no'`.
