---
layout: base.njk
title: Research
---

# Research

{% for item in collections.research %}
  {% if item.url != "/research/" %}

  <div class="research-card">

    <h3>
      <a href="{{ item.url }}">{{ item.data.title }}</a>
    </h3>
    
    <p>{{ item.inputPath }}</p>

    <p>{{ item.inputPath | getNavImage }}</p>

    <p>{{ item.data.summary }}</p>

  </div>

  {% endif %}
{% endfor %}
