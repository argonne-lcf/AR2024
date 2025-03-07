---
layout: page

title: Aurora Performance Highlights
intro: "With Aurora fully assembled, early science team members began running and optimizing their applications to prepare the system for open access. Here are some early performance results on Aurora."
teaser-img-source: openmc.PNG

theme: dark
permalink: features/aurora-performance-highlights
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

{% for item in site.performancehighlights %}

<div class="teaser">
  <a href="{{ site.url }}{{ item.url }}">
  	<div class="image-wrapper">
  		<div><img src="{{ site.url }}/assets/images/{{ item.image }}"></div>
  		<div class="hover-scrim"></div>
  	</div>
  	<div class="content-wrapper">
      <!-- <small class="eyebrow">{{ item.field }}</small> -->
  		<h3>{{ item.title }}</h3>
      <small class="meta">PI: {{ item.pi }}</small>
  	</div>
  </a>
</div>

{% endfor %}

</div>
