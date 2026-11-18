---
layout: base.njk
title: Research
---

# Research

{% for item in collections.all %}
  {% if item.url != "/research/" and item.url startsWith "/research/" %}

### <a href="{{ item.url }}">{{ item.data.title }}</a>

{{ item.data.summary }}

  {% endif %}
{% endfor %}
