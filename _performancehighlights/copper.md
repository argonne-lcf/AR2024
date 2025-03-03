---
layout: highlight

theme: dark
permalink: 'features/aurora-performance-highlights/cosmictagger'

title: 'High-Energy Particle Physics at Scale: CosmicTagger'
pi: 'Corey Adams, Argonne National Laboratory'

image: 'Adams-cosmictagger.png' 


---

{% include txt-intro.html 
    blurb = "A deep learning-guided computer vision model featuring high-resolution imaging data and corresponding segmentation labels originating from a high-energy neutrino physics experiment, CosmicTagger is used by researchers working in high-energy particle physics to detect neutrino interactions and distinguish them from other cosmic particles and background noise.  A key benchmark for high-performance computing systems, CosmicTagger is run in both PyTorch and TensorFlow on multiple systems, representing a variety of architectures."
%}



# Challenge
The CosmicTagger project deals with the detection of neutrino interactions in a detector overwhelmed by cosmic particles. The goal is to differentiate and classify each pixel so as to separate cosmic pixels, background pixels, and neutrino pixels in a neutrino dataset. The technique uses multiple 2D projections of the same image, with each event generating three images of raw data. The training model utilizes a UResNet architecture for multi-plane semantic segmentation and is available in both PyTorch and Tensorflow with single node and distributed-memory multi-node implementations.



# Performance Results
Running on Sunspot, the Aurora test and development system, CosmicTagger achieved node throughput of 280 samples per second, representing a more than fivefold increase over other compared systems' throughput. Running the code on 512 nodes of Aurora achieved 83 percent scaling efficiency per node, using PyTorch and the distributed deep learning training framework Horovod. 

{% include media-img.html
   source= "Chart_CosmicTagger_.png"
%}

# Impact
Deep learning has enabled state-of-the-art results in high-energy neutrino physics, with this application in particular achieving substantially improved background particle rejection compared to classical techniques. Deploying CosmicTagger on Aurora will enable training and inference of the model at the highest resolution data and with the most scientifically accurate model.

Additionally, the Short Baseline Neutrino Detector, which originated the CosmicTagger application in collaboration with Argonne, is expected to begin operations in 2024. CosmicTagger will be beneficial in aiding the scientific analysis of what is expected to be the biggest, highest-resolution beam neutrino dataset ever collected.

