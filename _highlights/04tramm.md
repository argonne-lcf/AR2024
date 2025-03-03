---
layout: highlight

theme: white
permalink: 'science/highlights/tan'

title: 'Multiphysics Modeling of Blood Flow with Cell Suspensions in Patient- Specific Capillary Network'
pi: 'Jifu Tan, Northern Illinois University'
award: 'Director’s Discretionary'
systems: 'Cooley'
field: 'Biological Sciences'
sdl: 's'

image: 'tan.png' 
image-caption: 'A snapshot of complex flow with cell suspensions in the retina network showing the transport of cells in different regions of the network. The blue/ green coloring indicates the flow velocity within the network and blood cells are colored red.'
image-credit: 'ALCF Visualization and Data Analytics Team; Kacper Ostalowski and Jifu Tan, Northern Illinois University'

publications:
  - authors: 'Ostalowski, K., and J. Tan'
    title: 'Direct Simulation of Blood Flow with Heterogeneous Cell Suspensions in a Patient-Specific Capillary Network'
    source: 'Physics of Fluids'
    date: 'April 2022'
    publisher: 'AIP Publishing'
    url: 'https://doi.org/10.1063/5.0088342'
  - authors: 'Thompson, A.'
    title: 'Capillary Model Tracks Blood Flow in Healthy and Diseased Networks'
    source: 'Scilight'
    date: 'April 2022'
    publisher: 'AIP Publishing'
    url: 'https://doi.org/10.1063/10.0010412'
    
    
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
