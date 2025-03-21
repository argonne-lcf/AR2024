---
layout: section-head

theme: dark
permalink: features

title: Features
bg-mp4-source: "harvey.mp4"
intro: "The ALCF is providing supercomputing and AI resources and capabilities to enable pioneering research at the intersection of simulation, big data analysis, and machine learning."
---


<div class="teasers">

{% assign features = site.data.nav-config.toc | where: "title", "Features" %}
{% for entry in features[0].subfolderitems %}
{% assign feature = site.pages | where: 'permalink', entry.url %}


<div class="teaser">
  <a href="{{ site.url }}/{{ entry.url }}">
  	<div class="image-wrapper">
  		{% if feature[0].teaser-img-source %}
      <div><img src="{{ site.url }}/assets/images/{{ feature[0].teaser-img-source }}"></div>
      {% elsif feature[0].hero-img-source %}
      <div><img src="{{ site.url }}/assets/images/{{ feature[0].hero-img-source }}"></div>
      {% endif %}
  		<div class="hover-scrim"></div>
  	</div>
  	<div class="content-wrapper">
  		<h3>{{ feature[0].title }}</h3>
  		<p>{{ feature[0].intro }}</p>
  	</div>
  </a>
</div>

{% endfor %}

</div>

