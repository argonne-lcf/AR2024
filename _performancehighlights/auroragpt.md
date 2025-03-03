---
layout: highlight

theme: dark
permalink: 'features/aurora-performance-highlights/connectomics'

title: 'Brain Connectome Reconstruction at Scale: Large-Scale Connectomics with Flood-Filling Networks'
pi: 'Nicola Ferrier, Argonne National Laboraotory'
award: 'Early Science Program'
systems: '-'

image: 'Ferrier-connectomics.png' 


---

{% include txt-intro.html 
    blurb = "The structure of the human brain is enormously complex and not well understood. Its 80 billion neurons, each connected to as many as 10,000 other neurons, support activities from sustaining vital life processes to defining who we are. From high-resolution electron microscopy images of brain tissue, computer vision and machine learning techniques operating at the exascale can reveal the morphology and connectivity of neurons in brain tissue samples, informing future studies of the structure and function of mammalian brains."
%}



# Challenge

Connectomics stresses many boundaries: high-throughput electron microscopy technology
operating at nanometer resolution; tens of thousands of images, each with tens of gigapixels;
accuracy sufficient to capture minuscule synaptic detail; computer vision methods to align
corresponding structures across large images; and deep learning networks that can trace
narrow axons and dendrites over large distances. Multiple applications contribute to the 3D reconstruction of neurons; the most demanding of them perform image alignment and segmentation.

Before the 3D shape of neurons can be reconstructed, the 2D profiles of objects must be aligned between neighboring images in an image stack. Image misalignment can occur when tissue samples are cut into thin sections, or during imaging on the electron microscope. The Feabas application (developed by collaborators at Harvard) uses template matching and feature matching techniques for coarse and fine-grained alignment, using a network-of-springs approach to produce optimal linear and local non-linear image transformations, to align the 2D image content between sections.

# Performance Results
Deep learning models for connectomic reconstruction have been trained on Aurora on up to 512 nodes, demonstrating performance increases up to 40 percent.

Reconstructions have been run with these models on up to 1024 nodes on Aurora, with multiple inference processes per GPU, to produce a segmentation of a teravoxel of data. Projecting from these runs to the full machine, the researchers anticipate being able to segment a petavoxel dataset on Aurora imminently.

{% include media-img.html
   source= "Chart_Connectome_.png"
%}

# Impact

Connectomics today is leveraging innovations in imaging, supercomputing, and artificial intelligence to improve our understanding of how the brain's neurons are arranged and connected; this is becoming possible today due to exascale computing on Aurora. The techniques developed guarantee that computing will scale from cubic millimeters of brain tissue today, to a cubic centimeter whole mouse brain in the future, and to larger volumes of human brain tissue. As imaging technology advances, computing will need to achieve high performance on post-exascale machines to avoid becoming the bottleneck.

The work done to prepare this project for exascale will also benefit other exascale system users: with the electron microscopy algorithms under development, for example, promising broad application to x-ray data, especially with the upcoming upgrade to Argonne’s Advanced Photon Source, a DOE Office of Science User Facility.
