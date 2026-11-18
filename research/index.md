---
layout: base.njk
title: Research
---

# Research

{% for item in collections.research %}
  {% if item.url != "/research/" %}

<div class="research-card">

  {% assign navImage = item.inputPath | getNavImage %}

  <a href="{{ item.url }}">

    {% if navImage %}
      <img src="{{ navImage }}" alt="{{ item.data.title }}">
    {% endif %}

    <div class="research-card-title">
      {{ item.data.title }}
    </div>

  </a>

</div>

  {% endif %}
{% endfor %}
