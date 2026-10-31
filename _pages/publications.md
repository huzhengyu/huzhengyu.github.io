---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
excerpt: "Journal publications by Zhengyu Hu on coastal engineering, breaking wave impacts, fluid–structure interaction, tsunami-induced scour and sediment transport."
---

{% assign pubs = site.publications | sort: "date" | reverse %}
<p class="page__lead">{{ pubs.size }} peer-reviewed journal articles. {% if site.author.googlescholar %}See also my <a href="{{ site.author.googlescholar }}">Google Scholar profile</a> for citations.{% endif %} <span class="muted"><strong class="pub__me">{{ site.author_highlight }}</strong> marks my name.</span></p>

{% assign by_year = pubs | group_by_exp: "p", "p.date | date: '%Y'" %}
{% for year in by_year %}
<h2 class="year-heading" id="y{{ year.name }}">{{ year.name }}</h2>
<div class="pub-list">
{% for post in year.items %}{% include pub-card.html pub=post %}{% endfor %}
</div>
{% endfor %}
