---
layout: highlight

theme: white
permalink: 'science/highlights/pal'

title: 'High-Fidelity Simulations of Gas Turbine Combustors for Sustainable Aviation Applications'
pi: 'Muhsin Ameen, Sicong Wu, Argonne National Laboratory'
award: 'Director’s Discretionary'
systems: 'Theta'
field: 'Energy Technologies'
sdl: 's'

image: 'Wu.png' 
image-caption: 'Instantaneous velocity magnitude in ARC-M1 combustor.'
image-credit: 'Sicong Wu, Argonne National Laboratory'

publications:
  - authors: 'Wu, S., D. Dasgupta, M. Ameen, and S. Patel'
    title: 'LES Modeling of Gas Turbine Combustor Using Nek5000'
    source: 'Bulletin of the American Physical Society'
    date: 'November 2022'
    publisher: 'APS'
  - authors: 'Wu, S., D. Dasgupta, M. Ameen, and S. Patel'
    title: 'High-Fidelity Simulations of Gas Turbine Combustor Using Spectral Element Method'
    source: 'AIAA SCITECH 2023 Forum'
    date: 'January 2023'
    publisher: 'AIAA'
    url: 'https://doi.org/10.2514/6.2023-1641'
    
    
---

{% include txt-intro.html 
    blurb = "With a push towards decarbonizing the aviation sector, sustainable aviation fuels (SAFs) have gained prominence as a potential replacement for fossil fuels. This project is developing the capabilities to perform fully-resolved simulations of modern gas turbine combustors to enable improved understanding of the multiphysics processes in the context of advancing the development of SAFs."
%}



## Challenge

To assess the viability of various SAFs, researchers must be able to understand and predict the complex flow, spray, and combustion processes taking place in the gas turbine combustors, and their influence on events such as lean blow out, high altitude relight and cold start, that affect the performance of gas turbines. With recent advances in numerical methods and the availability of HPC resources, computer simulations can provide unprecedented details of the underlying multiphysics processes, but they rely on the complex task of creating a detailed computational model of the gas turbine that is accurate and runs efficiently on modern computers.



## Approach

The objective of this research is to develop capabilities to perform fully-resolved simulations of modern gas turbine combustors using Nek5000 to enable improved understanding of the multiphysics processes in the context of advancing the development of sustainable aviation fuels. Nek5000 is a high-order spectral element method (SEM) based code, developed at Argonne, targeted towards exascale systems. Proper orthogonal decomposition of the turbulent flow field were performed to investigate the dynamics of the large- and small-scale turbulence in the combustor. Finally, simulations with fuel injection were used to determine the effect of fuel spray on the turbulent flow structures.



## Results

In this project, the team performed the first-ever wall-resolved large eddy simulations of the turbulent flow and spray processes in the Army Research Laboratory’s ARC-M1 research combustor. The simulations were validated using particle image velocimetry measurements from a group at the University of Illinois at Urbana-Champaign, and showed good agreement. The simulations demonstrated the presence of large and small recirculation regions generated due to mixing between the different flow streams. The accurate prediction of these recirculation regions is key in predicting the flame anchoring and dynamics for reacting simulations.



## Impact

These high-fidelity simulations that leverage the DOE supercomputers can help researchers understand the combustion and heat transfer challenges introduced by using low-carbon sustainable aviation fuels. This project will help establish a high-fidelity, scalable, numerical framework that can be used for evaluating the effect of fuel properties on flow and flame dynamics in a practical gas turbine combustor.
