---
layout: page

title: 2024 Science Highlights
intro: "In 2024, researchers from around the globe used ALCF supercomputing and AI resources to drive breakthroughs in fields ranging from protein design to fusion energy, hypersonic flight, and astrophysics."
teaser-img-source: larsson.png
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
