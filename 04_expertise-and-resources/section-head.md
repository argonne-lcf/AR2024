---
layout: section-head

theme: green
permalink: expertise-and-resources

title: Expertise and Resources
bg-mp4-source: "sc24.mp4"
intro: "The ALCF’s unique combination of supercomputing resources and expertise is helping its user community to accelerate the pace of scientific discovery and innovation."
---



<div class="teasers">

{% assign er-pages = site.data.nav-config.toc | where: "title", "Expertise and Resources" %}
{% for entry in er-pages[0].subfolderitems %}
{% assign er-page = site.pages | where: 'permalink', entry.url %}


<div class="teaser">
  <a href="{{ site.url }}/{{ entry.url }}">
  	<div class="image-wrapper">
  	  {% if er-page[0].teaser-img-source %}
      <div><img src="{{ site.url }}/assets/images/{{ er-page[0].teaser-img-source }}"></div>
      {% elsif er-page[0].hero-img-source %}
      <div><img src="{{ site.url }}/assets/images/{{ er-page[0].hero-img-source }}"></div>
      {% endif %}
  		<div class="hover-scrim"></div>
  	</div>
  	<div class="content-wrapper">
  		<h3>{{ er-page[0].title }}</h3>
  		<p>{{ er-page[0].intro }}</p>
  	</div>
  </a>
</div>

{% endfor %}

</div>

