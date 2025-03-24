---
layout: section-head

theme: green
permalink: community-and-outreach

title: Growing the HPC Community
bg-mp4-source: "volume.mp4"
intro: "The ALCF is actively working to expand the impact of supercomputers and AI for science through leading initiatives to inspire the next generation of researchers in HPC and computing sciences."
---



<div class="teasers">

{% assign com-pages = site.data.nav-config.toc | where: "title", "Growing the HPC Community" %}
{% for entry in com-pages[0].subfolderitems %}
{% assign com-page = site.pages | where: 'permalink', entry.url %}


<div class="teaser">
  <a href="{{ site.url }}/{{ entry.url }}">
  	<div class="image-wrapper">
  	  {% if com-page[0].teaser-img-source %}
      <div><img src="{{ site.url }}/assets/images/{{ com-page[0].teaser-img-source }}"></div>
      {% elsif com-page[0].hero-img-source %}
      <div><img src="{{ site.url }}/assets/images/{{ com-page[0].hero-img-source }}"></div>
      {% endif %}
  		<div class="hover-scrim"></div>
  	</div>
  	<div class="content-wrapper">
  		<h3>{{ com-page[0].title }}</h3>
  		<p>{{ com-page[0].intro }}</p>
  	</div>
  </a>
</div>

{% endfor %}

</div>

