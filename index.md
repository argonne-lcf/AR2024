---

layout: home

title: Argonne Leadership Computing Facility

---
{% assign features = site.data.nav-config.toc | where: "title", "Features" %}


<div class="home--hero-wrapper">
	<div class="img-wrapper">
		<div>
			<!-- <img src="{{ site.url }}/assets/images/cover.png"> -->
			<!-- poster="{{ site.url }}/assets/images/cover.png"  -->
			<video autoplay loop muted>
				<source src="{{ site.url }}/assets/video/hypersonic.webm" type="video/webm">	
				<source src="{{ site.url }}/assets/video/hypersonic.mp4" type="video/mp4">
  				Your browser does not support the video tag.
			</video>
			<div class="home--hero-text">
				<h1 class="alcf">
					Argonne<br>
					<span>Leadership<br>
					Computing</span><br>
					Facility
				</h1>
				<h1 class="title">
					2024<br>
					<span>Annual<br>
					Report</span><br>
				</h1>
			</div>
			<div class="home--hero-scrim"></div>
		</div>
	</div>
</div>

<div class="home--hero-caption">
	<small>
		Researchers from the University of Dayton Research Institute and the Air Force Research Laboratory are using ALCF supercomputers to shed light on the complex thermal environment that hypersonic vehicles encounter. This image shows the contour of gas velocity along an experimental test article.
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
				<iframe src="https://www.youtube.com/embed/-UBFVYZqoHQ?si=VaOCTlz0re_k0VCn&amp;clip=UgkxMyXhlXf6cejE6yfL-z6T4-cvDN9wRY-9&amp;clipt=EO_TAxjn8gY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
			<p>
				Argonne physicist Walter Hopkins discusses the importance of Aurora for extracting more information from particle physics experiments. <span class="credit">Credit: Argonne National Laboratory</span>
			</p>
		</div>
		<div class='embed-2'>
			<div class="embed-wrapper">
				<iframe src="https://www.youtube.com/embed/3mm-V7qehRk?si=tTBXBicmlLl6GTEr&amp;clip=UgkxwFyoghxZ34Tos70zgWr8VLa6ZXH5Z-DW&amp;clipt=EOW2BBjv5wc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
			<p>
				Argonne cosmologist Katrin Heitmann discusses how Aurora will help scientists search for dark energy and improve our understanding of the cosmos. <span class="credit">Credit: Argonne National Laboratory</span>
			</p>
		</div>
		<div class='embed-3'>
			<div class="embed-wrapper">
				<iframe src="https://www.youtube.com/embed/stoy8fkJC7s?si=w-2HEzK_PJZSFflN&amp;clip=Ugkx4ffoVvaU1z6zjhOy5cSgU4i5ZsU7aHQ5&amp;clipt=EMDOAxiiggc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
			<p>
				Argonne neuroscientist Bobby Kasthuri and computational scientist Nicola Ferrier discuss how Aurora and the upgraded APS will improve our understanding of the structure and function of the human brain. <span class="credit">Credit: Argonne National Laboratory</span>
			</p>
		</div>
	<!-- </div> -->
</div>




