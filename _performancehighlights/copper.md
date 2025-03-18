---
layout: highlight

theme: dark
permalink: 'features/aurora-performance-highlights/copper'

title: 'Cooperative Caching Layer for Scalable Parallel Data Movement in Exascale Supercomputing: Copper'
pi: 'Venkat Vishwanath, Argonne National Laboratory'
award: 'Early Career Research Program, AI for Science'
systems: '-'

image: 'Adams-cosmictagger.png' 


---

{% include txt-intro.html 
    blurb = "Users of exascale computers like the ALCF’s Aurora—which feature more than 10,000 compute nodes—can experience as much as 20 minutes of idle time for a single line of code during application initialization.

Copper, a scalable data loading library developed at the ALCF by an Argonne research team, addresses this problem—reducing load times by as much as 95 percent—by freeing up energy and compute resources. This is achieved without any changes to application codes.
"
%}



# Challenge
The CosmicTagger project deals with the detection of neutrino interactions in a detector overwhelmed by cosmic particles. The goal is to differentiate and classify each pixel so as to separate cosmic pixels, background pixels, and neutrino pixels in a neutrino dataset. The technique uses multiple 2D projections of the same image, with each event generating three images of raw data. The training model utilizes a UResNet architecture for multi-plane semantic segmentation and is available in both PyTorch and Tensorflow with single node and distributed-memory multi-node implementations.



# Performance Results
Running on Sunspot, the Aurora test and development system, CosmicTagger achieved node throughput of 280 samples per second, representing a more than fivefold increase over other compared systems' throughput. Running the code on 512 nodes of Aurora achieved 83 percent scaling efficiency per node, using PyTorch and the distributed deep learning training framework Horovod. 

{% include media-img.html
   source= "Chart_CosmicTagger_.png"
%}

# Impact
Copper has not only drastically reduced the total time to load data and software libraries, but has also freed up such previously contended, highly demanded resources such as filesystem responders and storage network bandwidth. The savings in time and energy have enabled the ALCF to permit more science-campaign jobs with more efficient utilization of resources. Copper also provides an effective means to adopt and reuse existing software libraries developed within the DOE laboratory system. The researchers are currently assisting other exascale computing facilities with the implementation of Copper.
