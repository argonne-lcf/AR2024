---
layout: page

title: 2024 Science Highlights
intro: "In 2024, researchers from around the globe leveraged ALCF's supercomputing and AI resources to drive breakthroughs across a diverse array of scientific fields. Highlights from the past year include an AI-driven protein design framework, offering new pathways for drug development; large-scale simulation campaigns to advance fusion energy science and hypersonic aircraft research; and a collaboration with NASA to simulate the cosmos, aiding preparations for future telescopes. These highlights represent just a sampling of the groundbreaking work being done by ALCF users to accelerate scientific discovery and innovation."
teaser-img-source: ALCF-MProtDPO.png
theme: white
permalink: science/highlights
---

<!-- <ul>
  {% for item in site.highlights %}
    <li>
      <a href="{{ site.url }}{{ item.url }}">{{ item.title }}</a>
    </li>
  {% endfor %}
</ul>
 -->
 
<br>

<div class="teasers">

{% for item in site.highlights %}

<div class="teaser">
  <a href="{{ site.url }}{{ item.url }}">
  	<div class="image-wrapper">
  		<div><img src="{{ site.url }}/assets/images/{{ item.image }}"></div>
  		<div class="hover-scrim"></div>
  	</div>
  	<div class="content-wrapper">
      <small class="eyebrow">{{ item.field }}</small>
  		<h3>{{ item.title }}</h3>
      <small class="meta">PI: {{ item.pi }}</small>
  	</div>
  </a>
</div>

{% endfor %}

</div>
