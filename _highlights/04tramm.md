---
layout: highlight

theme: white
permalink: 'science/highlights/tramm'

title: 'Efficient Algorithms for Monte Carlo Particle Transport on AI Accelerator Hardware'
pi: 'John Tramm, Argonne National Laboratory'
award: 'Director’s Discretionary'
systems: 'AI Testbed'
field: 'Computer Science'
sdl: 's,l'

image: 'tramm.jpg' 
image-caption: 'Diagram showing the energy column sorting process. Each square represents a single PE in the WSE-2 grid, with each dot representing a particle.'
image-credit: 'John Tramm, Kazutomo Yoshii, Andrew Siegel, Argonne National Laboratory; Bryce Allen, Argonne National Laboratory and University of Chicago; Leighton Wilson, Cerebras Systems'

publications:
  - authors: 'Tramm, J., B. Allen, K. Yoshii, A. Siegel, and L. Wilson'
    title: 'Efficient Algorithms for Monte Carlo Particle Transport on AI Accelerator Hardware'
    source: 'Computer Physics Communications'
    date: 'December 2023'
    publisher: 'Elsevier BV'
    url: 'https://doi.org/10.1016/j.cpc.2023.109072'
  - authors: 'Tramm, J., B. Allen, K. Yoshii, and A. Siegel'
    title: 'Monte Carlo with Single-Cycle Latency: Optimization of a Continuous Energy Cross Section Lookup Kernel for AI Accelerator Hardware'
    source: 'International Conference on Physics of Reactors'
    date: 'April 2024'
    publisher: 'American Nuclear Society'
    location: San Francisco, CA
    url: 'https://doi.org/10.13182/PHYSOR24-43696'
    
    
---

{% include txt-intro.html 
    blurb = "In this study, researchers led by Argonne National Laboratory examined the feasibility of performing continuous energy Monte Carlo (MC) particle transport on the Cerebras Wafter-Scale Engine 2 (WSE-2). The researchers ported a key kernel from the MC transport algorithm to the Cerebras Software Language (CSL) programming model and evaluated the performance of the kernel on the Cerebras WSE-2."
%}



# Challenge

Beyond the challenge of porting the kernel into the low-level CSL programming model, the team proposed and tested various new algorithms to handle the decomposition of neutron cross-sectional data (which is used to generate random samples for particle behavior) into the small local memory domains contained in each of 750,000-some WSE-2 units.


# Approach

The researchers ported a simplified version of the MC cross-section lookup kernel (a kernel used by the MC neutral particle transport algorithm) using the Cerebras SDK and the Cerebras CSL programming model. Their decomposition and communication scheme involved three stages: (1) the sorting of particles into energy bands within each column of compute cores; (2) an iterative diffusion-based load balancing stage for balancing starting particle loads within each row; and (3) an exchange of particles to allow particles to accumulate nuclide information from each column in the row. All communication patterns had to be developed to avoid any concept of global synchronization or point-to-point message passing, given the limitations of the WSE-2 hardware. Additionally, the team developed an architecture-specific optimization to leverage the capabilities of the WSE-2 and a highly optimized CUDA kernel for testing on an NVIDIA A100 graphics processing unit to provide a baseline to contextualize the performance of the WSE-2.


# Results

A single WSE-2 was found to run 130 times faster than the highly optimized CUDA version of the kernel deployed on a single NVIDIA A100—significantly outpacing expected performance increase, given the difference in transistor counts between the architectures. However, the performance gains came at a cost—namely, increases in both software programming and algorithmic complexity. Considering how AI accelerators such as the WSE-2 were designed almost exclusively around deep learning AI tasks, it is noteworthy that the WSE-2 is already able to exceed performance expectations relative to GPUs—an architecture that has had several decades to mature and is now quite friendly to HPC simulation applications. A follow-up study saw the WSE-2 achieve a 182x speedup over the A100.


# Impact

The team’s analysis suggests the potential for a wide variety of complex and irregular simulation methods to be mapped efficiently onto AI accelerators like the Cerebras WSE-2. Such accelerators could offer significant advantages to traditional simulation workloads, and the development of higher-level programming models to more readily enable software development and exploration could greatly benefit HPC simulations. MC simulations themselves offer the potential to fill in crucial gaps in experimental and operational nuclear reactor data.
