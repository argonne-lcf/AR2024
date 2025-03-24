---

layout: home

title: Argonne Leadership Computing Facility

---
{% assign features = site.data.nav-config.toc | where: "title", "Features" %}



<div class='home--content-wrapper'>

<div class="home--hero-caption">
	<small>
		&#9650; Researchers used the ALCF’s Polaris supercomputer to perform GPU-enabled weather simulations at cloud-resolving (1 km) spatial resolution for the month of September 2017. Covering the entire North American continent and approximately 3 billion grid cells, this visualization shows water vapor (red-blue) and cloud water (white-grayscale) fields, with wind vectors highlighting the jet stream pattern.
		<span class="credit">Image: ALCF Visualization and Data Analytics Team; Rao Kotamarthi and Gökhan Sever, Argonne National Laboratory</span>
	</small>
</div>


 

<div class="home--features-wrapper">
	<div class="content-wrapper">
		<h2>Features</h2>
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
			<div class="teaser">
			    <a href="{{ site.url }}/science/highlights">
			    	<div class="image-wrapper">
			    		<div><img src="{{ site.url }}/assets/images/ALCF-MProtDPO.png"></div>
			    		<div class="hover-scrim"></div>
			    	</div>
			    	<div class="content-wrapper">
			    		<h3>Science Highlights</h3>
			    		<p>In 2024, researchers from around the globe leveraged ALCF's supercomputing and AI resources to drive breakthroughs across a diverse array of scientific fields. Highlights from the past year include a novel AI-driven approach to protein design; large-scale simulation campaigns advancing fusion energy science and hypersonic aircraft research; and a collaboration with NASA to simulate the cosmos in preparation for upcoming telescopes.</p>
			    	</div>
			    </a>
			  </div>	
	</div>
</div>



<div class="home--video-wrapper">
	<!-- <div class="content-wrapper"> -->
		<h2>Insights</h2>
		<div class='embed-1'>
			<div class="embed-wrapper">
				<iframe src="https://www.youtube.com/embed/ryGbG0va0NI?si=s-30w8lgeWcWywIj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
			<small class='caption'>
				The quick brown fox jumps over the lazy dog. <span class="credit">Credit: Argonne National Laboratory</span>
			</small>
		</div>
		<div class='embed-2'>
			<div class="embed-wrapper">
				<iframe src="https://www.youtube.com/embed/p73JPSPTzVo?si=Zu_4Jz_E0jADcypf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
			<small class='caption'>
				The quick brown fox jumps over the lazy dog. <span class="credit">Credit: Argonne National Laboratory</span>
			</small>
		</div>
		<div class='embed-3'>
			<div class="embed-wrapper">
				<iframe src="https://www.youtube.com/embed/YpB6kQ_i9pA?si=DG9_nDvX8sXvzzMn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
			<small class='caption'>
				The quick brown fox jumps over the lazy dog. <span class="credit">Credit: Argonne National Laboratory</span>
			</small>
		</div>
	<!-- </div> -->
</div>

</div><!-- End home--content-wrapper -->




