---
layout: highlight

theme: dark
permalink: 'features/aurora-performance-highlights/hacc'

title: 'Learning from the Sky Using the Hardware/Hybrid Accelerated Cosmology Code: CRK- HACC'
pi: 'Katrin Heitmann, Salman Habib, Argonne National Laboratory'
award: 'Aurora Early Science Program and Exascale Computing Project'
systems: '-'

image: 'Habib-HACC.png' 

---

{% include txt-intro.html 
    blurb = "HACC (Hardware/Hybrid Accelerated Cosmology Code) is a cosmological N-body and hydrodynamics simulation code designed to run at extreme scales on all HPC systems,
especially those operated by DOE national laboratories. HACC computes the complicated emergence of structure in the universe across cosmological history, the core of the code’s
functionality consisting of gravitational calculations along with the more recent addition of gas dynamics and astrophysical subgrid models. The solvers are integrated with a large set of sophisticated analysis methods encapsulated within HACC’s CosmoTools library."
%}



# Challenge

HACC is structured to remain mostly consistent across different architectures such that it requires only limited changes when ported to new hardware; the inter-nodal level of code—the level of code that communicates between nodes—is nearly invariant from machine to machine. Consequently, the approach taken to porting HACC effectively reduces the problem to the node level, thereby permitting concentration of effort on optimizing critical code components with a full awareness of the actual hardware.

In bringing HACC to exascale, the developers have aimed to evaluate Aurora’s early hardware and software development kit on a set of more than 60 complex kernels primarily written in CUDA or otherwise under active development, minimize divergence between CUDA and SYCL versions of the codebase, identify configurations and implementation optimizations specific to Intel GPUs, and identify more generally applicable implementation optimizations.

Versions of HACC being developed for exascale systems incorporate basic gas physics (hydrodynamics) to enable more detailed studies of structure formation on the scales of galaxy clusters and individual galaxies. These versions also include sub-grid models that integrate phenomena like star formation and supernova and AGN feedback, which means the addition of more performance-critical code sections that also run on GPUs. A GPU implementation of HACC with hydrodynamics was previously developed for the Titan and Summit systems using OpenCL and CUDA. All the GPU versions of the code have been rewritten to target Aurora.


# Performance Results
HACC simulations have been performed on Aurora in runs using as many as 1920 nodes. Visualizations of results generated on Aurora illustrate the large-scale structure of the universe. Single-GPU performance on Aurora exceeds that of compared systems: Figure-of-Merit assessments measuring particle-steps per second used 33 million particles per GPU and saw performance increases ranging from 15 to 50 percent.

{% include media-img.html
   source= "Chart_CRK_HACC_.png"
%}

# Impact
Modern cosmology provides a unique window to fundamental physics, and has led to remarkable discoveries culminating in a highly successful model for the dynamics of the Universe. Simulations and predictions enabled by the HACC code deployed at exascale will help deepen our understanding of the structure of the universe and its underlying physics.
Furthermore, new generations of cosmological instruments, such as the Vera C. Rubin Observatory, will depend on exascale systems in order to interpret the measurements; exascale cosmological simulations developed through HACC will enable researchers to simultaneously analyze observational data from state-of-the-art telescopes to test different theories of cosmological evolution.
