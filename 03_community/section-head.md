---
layout: page

theme: green
permalink: community-and-outreach

title: Growing the HPC Community
intro: "As a leader in the HPC community, the ALCF is actively involved in efforts to broaden the impact of supercomputers and AI for science. The facility also leads and contributes to several activities designed to inspire the next generation of researchers in HPC and the computing sciences."
---

{% include media-img.html
   source= "fpo.jpg"
   caption= "The quick brown fox jumps over the lazy dog."
   credit= "Name A. Name"
%}

<br><br>


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

