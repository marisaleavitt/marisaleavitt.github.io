---
layout: base.njk
title: Research
---

# Research

{% for item in collections.all %}
  {% if item.url != "/research/" and item.url startsWith "/research/" %}

### [{{ item.data.title }}]({{ item.url }})

{{ item.data.summary }}

  {% endif %}
{% endfor %}
