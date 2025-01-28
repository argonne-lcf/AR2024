---
layout: page

title: Kitchen Sink
intro: "Intro text the quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick fox jumps over the lazy dog."
hero-img-source: "fpo.jpg"
hero-img-caption: "The quick brown fox jumps over the lazy dog."
hero-img-credit: "Name A. Name"

aside: aside-01.md

permalink: /kitchen-sink/
---







<!-- Hero Video
	   NOTE: Make sure to surround the embed code with different quotation marks than are used within the code. For example, surround the code with single quotation marks if double marks are used within the embed code.
	   NOTE: Make sure to remove any width/height properties from the embed code
	   NOTE: This include is commented out as there should only be one 'hero' per page, to use this include replace the comment arrows with the template brackets (the curly brackets with percentage signs).

	  available parameters:
		* embed-code
		- caption
		- credit

		* required
------------------------------------------------------------------------------>

<!--  include media-hero-video.html
      embed-code= '<iframe src="https://www.youtube.com/embed/tE9uKTgmQvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      caption= "The quick brown fox jumps over the lazy dog."
      credit= "Name A. Name"
-->



<!-- Basic Markdown Text Options
	   For more see: https://www.markdownguide.org/
------------------------------------------------------------------------------>

# H1 Subhead

## H2 Subhead

### H3 Subhead

#### H4 Subhead

Paragraph text, the quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. Includes *italic text*, **bold text**, <mark>highlight</mark>, ~~strikethrough~~, and 	[links](https://www.markdownguide.org/).

- Unordered list item 1
- Unordered list item 2
- Unordered list item 3

1. Ordered list item 1
2. Ordered list item 2
3. Ordered list item 3

```
Code block
var example = example;
```

| Example     | Table       | Table subhead   | Table subhead   |
| :---------- | :---------- | :-------------- | :-------------- |
| Value 1a    | Value 1b    | Value 1c        | Value 1d        |
| Value 2a    | Value 2b    | Value 2c        | Value 2d        |
| Value 3a    | Value 3b    | Value 3c        | Value 3d        |



<!-- Image
------------------------------------------------------------------------------>

{% include media-img.html
   source= "fpo.jpg"
   caption= "The quick brown fox jumps over the lazy dog."
   credit= "Name A. Name"
%}


<!-- Image 2x
------------------------------------------------------------------------------>

{% include media-img2x.html
   source1= "fpo.jpg"
   caption1= "The quick brown fox jumps over the lazy dog."
   credit1= "Name A. Name"
   source2= "fpo.jpg"
   caption2= "The quick brown fox jumps over the lazy dog."
   credit2= "Name A. Name"
%}



<!-- Video
	   NOTE: Make sure to surround the embed code with different quotation marks than are used within the code. For example, surround the code with single quotation marks if double marks are used within the embed code.
	   NOTE: Make sure to remove any width/height properties from the embed code

	  available parameters:
		* embed-code
		- caption
		- credit

		* required
------------------------------------------------------------------------------>

{% include media-video.html
   embed-code= '<iframe src="https://www.youtube.com/embed/tE9uKTgmQvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
   caption= "The quick brown fox jumps over the lazy dog."
   credit= "Name A. Name"
%}




<!-- Video 2x
	   NOTE: Make sure to surround the embed code with different quotation marks than are used within the code. For example, surround the code with single quotation marks if double marks are used within the embed code.
	   NOTE: Make sure to remove any width/height properties from the embed code

	  available parameters:
		* embed-code1
		- caption1
		- credit1
		* embed-code2
		- caption2
		- credit2

		* required
------------------------------------------------------------------------------>

{% include media-video2x.html
   embed-code1= '<iframe src="https://www.youtube.com/embed/tE9uKTgmQvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
   caption1= "The quick brown fox jumps over the lazy dog."
   credit1= "Name A. Name"
   embed-code2= '<iframe src="https://www.youtube.com/embed/tE9uKTgmQvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
   caption2= "The quick brown fox jumps over the lazy dog."
   credit2= "Name A. Name"
%}




<!-- Meta Info
	   NOTE: Can include up to 6 name:value pairs

	  available parameters:
		* name-1
		* value-1
		- name-2
		- value-2
		- name-3
		- value-3
		- name-4
		- value-4
		- name-5
		- value-5
		- name-6
		- value-6

		* required
------------------------------------------------------------------------------>

## Example Section with Meta Info


{%	include txt-meta.html 
	  name-1 = "NAME 1"
		value-1 = "Value 1"
		name-2 = "NAME 2"
		value-2 = "Value 2"
		name-3 = "NAME 3"
		value-3 = "Value 3"
%}

The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.



<!-- Figure
	   NOTE: Figures are displayed half-width and look best when using an even number of items.
	   NOTE: Limit the figure to 4 characters for best results

		available parameters:
		* figure-1
		* label-1
		- note-1
		- figure-2
		- label-2
		- note-2

		* required
------------------------------------------------------------------------------>

{%	include txt-fig.html 
	  figure-1 = "3k"
		label-1 = "Number of things"
		note-1 = "things from 2022 count of stuff"
		figure-2 = "75%"
		label-2 = "Percentage of things"
		note-2 = "things from 2022 count of stuff"
%}
