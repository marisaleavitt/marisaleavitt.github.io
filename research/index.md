---
layout: base.njk
title: Research
---

# Research

{% for item in collections.research %}
  {% if item.url != "/research/" %}

  <div class="research-card">

    {% if item.data.navImage %}
      <a href="{{ item.url }}">
        <img src="{{ item.data.navImage }}" alt="{{ item.data.title }}">
      </a>
    {% endif %}

    <h3>
      <a href="{{ item.url }}">{{ item.data.title }}</a>
    </h3>

    <p>{{ item.data.summary }}</p>

  </div>

  {% endif %}
{% endfor %}
