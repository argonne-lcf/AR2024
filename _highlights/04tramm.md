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

image: 'tramm.png' 
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
    blurb = "Cardiovascular disease, including heart attack and stroke, is the leading cause of death in the United States. In this project, simulations of blood flow with deformable red blood cells were performed for the first time in a patient- specific retina vascular network examining the impact of blockages on flow rate and cell transport dynamics."
%}



# Challenge

Modeling capillary flow accurately is challenging due to the complex structure with various vessel branches and loops, and moving cell suspensions whose size is comparable to vessel diameters. Large three-dimensional (3D) vascular networks, such as this, are typically represented by simplified one-dimensional (1D) models at a much lower computational cost; however, these reduced order models may not accurately describe the flow dynamics.



# Approach

Flow dynamics in a patient-specific retina capillary network were simulated through coupling of a lattice Boltzmann method (LBM) based fluid solver with particle-based cell membrane models using the immersed boundary method (IBM). The geometry of the retina network was obtained from the National Institutes Health 3D print database. The red and white blood cells were modeled as thin membranes using a particle-based method implemented in LAMMPS. Collaborating with the ALCF Visualization and Data Analytics team, the team used Cooley to develop scientific visualizations of their blood flow simulations.



# Results

From the 3D simulations, it was found that cells in blood act as moderators of flow. The flow of blood was redistributed from high flow rate regions near the inlet to the distant vessels with lower flow rates. Cell splitting behavior at bifurcations was found to be complex, which depends on many factors such as flow rates, pressure differences, or geometric parameters of the daughter branches. From 1D simulations, the steady state flow rate through the network was obtained 1) without any blockages and 2) for blockages in various vessels to assess the severity (i.e., change in flow velocity) and impact in different parts of the network. Several potential improvements to the 3D model were noted as well as the need for efficient post-analysis and visualization tools to enable in-situ visualization and analysis considering the large volume of data generated.



# Impact

Inclusion of larger white blood cells was found to significantly increase the transit time of red blood cells through vessels. The simulation of flow under partial vessel blockage (e.g., stenosis) with cells showed that cells could oscillate and be trapped in an adjacent vessel due to the fluctuating flow. The best performing 1D reduced order model still resulted in large errors in both the number of red blood cells and flow rate for short vessels, and such models may be more suitable for networks with larger vessels.
