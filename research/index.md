---
layout: base.njk
title: Research
---

# Research

{% for item in collections.research %}
  {% if item.url != "/research/" %}

  <div class="research-card">

    {% if item.data.title == "SLOPE" %}
      <a href="{{ item.url }}">
        <img src="/research/SLOPE/nav.png" alt="SLOPE">
      </a>
    {% endif %}

    <h3>
      <a href="{{ item.url }}">{{ item.data.title }}</a>
    </h3>

    <p>{{ item.data.summary }}</p>

  </div>

  {% endif %}
{% endfor %}
