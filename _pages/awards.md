---
layout: archive
title: "Awards & service"
permalink: /awards/
author_profile: true
excerpt: "Awards, honours and professional service of Zhengyu Hu, including peer review for Ocean Engineering, Coastal Engineering and Physics of Fluids."
---

<h2 class="year-heading" id="awards">Awards &amp; honours</h2>
<ol class="awards">
{% for a in site.data.awards %}
  <li class="award">
    <span class="award__date">{{ a.date }}</span>
    <div class="award__body">
      <h3 class="award__title"><i class="fas fa-award" aria-hidden="true"></i> {{ a.title }}</h3>
      {% if a.org or a.amount %}<p class="award__meta">{{ a.org }}{% if a.org and a.amount %} · {% endif %}{% if a.amount %}<span class="award__amount">{{ a.amount }}</span>{% endif %}</p>{% endif %}
    </div>
    {% if a.image %}<a class="award__img" href="{{ site.baseurl }}/images/{{ a.image }}" target="_blank" rel="noopener" title="View full size"><img src="{{ site.baseurl }}/images/{{ a.image }}" alt="{{ a.title }}" loading="lazy"></a>{% endif %}
  </li>
{% endfor %}
</ol>

<h2 class="year-heading" id="service">Professional service</h2>

{% for r in site.data.service.roles %}
<div class="service-role">
  <span class="badge">{{ r.role }}</span>
  <p>{{ r.detail }}</p>
</div>
{% endfor %}

<div class="reviews">
  <h3><i class="fas fa-search" aria-hidden="true"></i> Peer reviewer for</h3>
  <ul class="journal-list">
  {% for j in site.data.service.reviews %}<li>{{ j }}</li>{% endfor %}
  </ul>
</div>
