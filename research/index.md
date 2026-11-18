---
layout: base.njk
title: Research
---

# Research

{% for item in collections.research %}

  {% if item.url != "/research/" %}

### <a href="{{ item.url }}">{{ item.data.title }}</a>

{{ item.data.summary }}

  {% endif %}

{% endfor %}
