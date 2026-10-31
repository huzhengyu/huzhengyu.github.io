---
layout: archive
title: "Curriculum vitae"
permalink: /cv/
author_profile: true
excerpt: "Curriculum vitae of Zhengyu Hu."
redirect_from:
  - /resume
---

{% assign cv = site.baseurl | append: "/files/CV_Zhengyu.pdf" %}
<p class="intro__actions">
  <a class="btn btn--primary" href="{{ cv }}" download><i class="fas fa-download" aria-hidden="true"></i> Download CV (PDF)</a>
  <a class="btn btn--light" href="{{ cv }}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt" aria-hidden="true"></i> Open in new tab</a>
</p>

<div class="cv-embed">
  <object data="{{ cv }}#view=FitH" type="application/pdf" width="100%" height="100%" aria-label="CV of Zhengyu Hu">
    <p>Your browser can't display the PDF here. <a href="{{ cv }}">Download the CV</a> instead.</p>
  </object>
</div>

## At a glance

<div class="cv-grid" markdown="0">
  <section>
    <h3>Education</h3>
    <ul>
      <li><strong>Ph.D., Coastal Engineering</strong><br>National University of Singapore · 2021–2025</li>
      <li><strong>M.Eng., Port, Coastal &amp; Offshore Engineering</strong><br>Zhejiang University · 2018–2021</li>
    </ul>
  </section>
  <section>
    <h3>Experience</h3>
    <ul>
      <li><strong>Research Fellow</strong><br>National University of Singapore · 2024–present<br><span class="muted">with Prof. <a href="https://nus-ccl.com/">Yuzhu (Pearl) Li</a></span></li>
    </ul>
  </section>
  <section>
    <h3>Methods</h3>
    <ul>
      <li>Computational fluid dynamics</li>
      <li>Computational solid mechanics</li>
      <li>Experimental fluid dynamics</li>
    </ul>
  </section>
</div>
