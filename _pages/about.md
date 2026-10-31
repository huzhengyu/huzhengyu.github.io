---
permalink: /
title: "Zhengyu Hu"
seo_title: "Zhengyu Hu - Coastal Engineering, National University of Singapore"
excerpt: "Postdoctoral Research Fellow at the National University of Singapore working on coastal engineering, wave–structure–seabed interactions, sediment transport and scour."
author_profile: true
hide_title: true
redirect_from:
  - /about/
  - /about.html
---

<section class="intro">
  <p class="intro__eyebrow">Coastal Engineering · National University of Singapore</p>
  <h1 class="intro__name">Zhengyu Hu</h1>
  <div class="intro__lead">
    <p>I am a Postdoctoral Research Fellow in the Department of Civil and Environmental Engineering at the National University of Singapore (NUS), where I received my Ph.D. in Civil Engineering in 2025. My research focuses on understanding and predicting complex coastal processes through advanced computational and experimental approaches. My current interests include multiphysics modeling of coastal systems, nature-based coastal protection, wave–mud interactions, and physics-informed computational methods for next-generation coastal engineering.</p>
  </div>
  <p class="intro__actions">
    <a class="btn btn--primary" href="{{ site.baseurl }}/cv/"><i class="fas fa-file-alt" aria-hidden="true"></i> CV</a>
    <a class="btn btn--light" href="{{ site.baseurl }}/publications/"><i class="fas fa-book" aria-hidden="true"></i> Publications</a>
    <a class="btn btn--light" href="mailto:{{ site.author.email }}"><i class="fas fa-envelope" aria-hidden="true"></i> Contact</a>
  </p>
</section>

## Research interests

<ul class="interests">
  <li><i class="fas fa-water" aria-hidden="true"></i><span>Coastal Engineering</span></li>
  <li><i class="fas fa-layer-group" aria-hidden="true"></i><span>Wave–Structure–Seabed Interactions</span></li>
  <li><i class="fas fa-mountain" aria-hidden="true"></i><span>Sediment Transport, Scour &amp; Seabed Mechanics</span></li>
  <li><i class="fas fa-wind" aria-hidden="true"></i><span>Breaking Waves &amp; Turbulence Modeling</span></li>
  <li><i class="fas fa-exclamation-triangle" aria-hidden="true"></i><span>Tsunami &amp; Extreme Coastal Hazards</span></li>
  <li><i class="fas fa-leaf" aria-hidden="true"></i><span>Nature-Based Coastal Protection</span></li>
</ul>

## News

<ul class="news">
{% for item in site.data.news limit: 8 %}
  <li><time datetime="{{ item.date | date_to_xmlschema }}">{{ item.date | date: "%b %Y" }}</time><span>{{ item.text | markdownify | remove: '<p>' | remove: '</p>' }}</span></li>
{% endfor %}
</ul>

## Selected publications

{% assign selected = site.publications | where: "selected", true | sort: "date" | reverse %}
<div class="pub-list">
{% for post in selected %}{% include pub-card.html pub=post compact=true %}{% endfor %}
</div>

<p class="more-link"><a href="{{ site.baseurl }}/publications/">All publications <i class="fas fa-arrow-right" aria-hidden="true"></i></a></p>
