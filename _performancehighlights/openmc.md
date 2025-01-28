---
layout: highlight

theme: dark
permalink: 'features/aurora-performance-highlights/openmc'

title: 'Monte Carlo Neutron and Photon Transport Simulations: OpenMC'
pi: 'Steven Hamilton, Oak Ridge National Laboratory; Paul Romano, Jon Tramm, Argonne National Laboratory'
award: 'Exascale Computing Project'
systems: '-'

image: 'openmc.PNG' 

---

{% include txt-intro.html 
    blurb = "OpenMC, a Monte Carlo neutron and photon transport simulation code originally written for central processing unit- (CPU-) based high-performance computers (HPC) that is capable of using both distributed-memory (MPI) and shared-memory (OpenMP) parallelism, simulates the stochastic motion of neutral particles through a model that, as a representation of a real-world experimental setup, can range in complexity from a simple slab of radiation-shielding material to a full-scale nuclear reactor. Researchers have been working to port the application to graphics processor unit- (GPU-) based HPC systems."
%}



# Challenge
The GPU-oriented version of OpenMC has been completed and is already running on a number of GPU-based supercomputers, including Sunspot—the ALCF’s Aurora testbed and development system—and the ALCF’s NVIDIA-based Polaris. While the team’s goal is focused on honing performance on Aurora, the OpenMP offloading model has resulted in strong performance on every machine on which it was deployed, irrespective of vendor.

Current full-machine projections for OpenMC running on Aurora, based on preliminary simulation runs performed on Sunspot, are in the ballpark of 20 billion particle histories per second—indicating a speedup by some 2500x over what could be achieved at full-machine scale at the time of the Exascale Computing Project’s inception (the goal for which had been a fiftyfold speedup).




# Performance Results
The code has been run across multiple types of GPUs, with large performance gains—all over 2x—demonstrated on the Aurora testbed, Sunspot, over other systems. The increases have been consistent across single-GPU, full-node, and multi-node comparisons performed in 2023 on as many as 96 GPUs.

{% include media-img.html
   source= "Chart_OpenMC_.png"
%}



# Impact

The ECP-supported ExaSMR project aims to use OpenMC to model the entire core of a nuclear reactor, generating virtual reactor simulation datasets with high-fidelity, coupled physics models for reactor phenomena that are truly predictive, filling in crucial gaps in experimental and operational reactor data. The extreme performance gains OpenMC has achieved on GPUs are finally bringing within reach a much larger class of problems that historically were deemed too expensive to simulate using Monte Carlo methods.


