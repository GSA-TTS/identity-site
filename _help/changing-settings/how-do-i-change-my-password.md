---
order: 1
redirect_from: /help/changing-settings/
---

{% assign file_size = page.url | size | minus: 2 %}
{% assign page_file = page.url | slice: 1 , file_size | append: '.md' %}
{% translate_file page_file %}
