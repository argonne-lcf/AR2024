---

layout: home

title: Argonne Leadership Computing Facility

---
{% assign features = site.data.nav-config.toc | where: "title", "Features" %}



<div class='home--content-wrapper'>

<div class="home--hero-caption">
	<small>
		&#9650; Researchers from the University of Dayton Research Institute and the Air Force Research Laboratory are using ALCF supercomputers to shed light on the complex thermal environment that hypersonic vehicles encounter. This image shows the contour of gas velocity along an experimental test article.
		<span class="credit">Image: ALCF Visualization and Data Analytics Team, Air Force Research Laboratory, and University of Dayton Research Institute</span>
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
			    		<div><img src="{{ site.url }}/assets/images/Uzdensky.png"></div>
			    		<div class="hover-scrim"></div>
			    	</div>
			    	<div class="content-wrapper">
			    		<h3>Science Highlights</h3>
			    		<p>In 2023, scientists from across the world used ALCF supercomputing and AI resources to accelerate discovery and innovation across a wide range of research areas. The following science highlights detail some of the groundbreaking research campaigns carried out by ALCF users over the past year.</p>
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




