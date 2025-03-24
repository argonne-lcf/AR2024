---
layout: section-head

theme: green
permalink: science

title: Science
bg-mp4-source: "bubbly.mp4"
intro: "The ALCF is accelerating scientific discoveries in many disciplines, ranging from physics and materials science to biology and engineering."
---



<div class="teasers">

{% assign sci-pages = site.data.nav-config.toc | where: "title", "Science" %}
{% for entry in sci-pages[0].subfolderitems %}
{% assign sci-page = site.pages | where: 'permalink', entry.url %}


<div class="teaser">
  <a href="{{ site.url }}/{{ entry.url }}">
  	<div class="image-wrapper">
  	  {% if sci-page[0].teaser-img-source %}
      <div><img src="{{ site.url }}/assets/images/{{ sci-page[0].teaser-img-source }}"></div>
      {% elsif sci-page[0].hero-img-source %}
      <div><img src="{{ site.url }}/assets/images/{{ sci-page[0].hero-img-source }}"></div>
      {% endif %}
  		<div class="hover-scrim"></div>
  	</div>
  	<div class="content-wrapper">
  		<h3>{{ sci-page[0].title }}</h3>
  		<p>{{ sci-page[0].intro }}</p>
  	</div>
  </a>
</div>

{% endfor %}

</div>

