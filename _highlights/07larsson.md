---
layout: highlight

theme: white
permalink: 'science/highlights/larsson'

title: 'Three-Dimensional Shock Boundary Layer Interactions over Flexible Walls'
pi: 'Johan Larsson, University of Maryland; Ivan Bermejo-Moreno, University of Southern California'
award: 'INCITE'
systems: 'Theta'
field: 'Engineering'
sdl: 's'

image: 'larsson.tif' 
image-caption: 'Snapshot of simulation results obtained for a wedge deflection of 17.5 degree at time t=15 ms, showing contour maps of the flexible panel vertical displacement, the wall shear stress, and the fluid flow velocity on a vertical slice at the center of the spanwise domain, highlighting the incident and reflected shocks, the turbulent boundary layer, and the separation bubble.'
image-credit: 'Ivan Bermejo-Moreno, University of Southern California'

publications:
  - authors: 'Hoy, J., and I. Bermejo-Moreno'
    title: 'Fluid-Structural Coupling of an Impinging Shock-Turbulent Boundary Layer Interaction at Mach 3 over a Flexible Panel'
    source: 'Flow'
    date: 'December 2022'
    publisher: 'Cambridge University Press'
    url: 'https://doi.org/10.1017/flo.2022.28'
    
    
---

{% include txt-intro.html 
    blurb = "To design safe and efficient hypersonic aircraft, engineers must understand how shockwaves and turbulence affect the aircraft’s performance and structural integrity. Recently, a team from the University of Southern California and the University of Maryland used ALCF supercomputing resources to develop predictive 3D simulations of shock wave and turbulent interactions over flexible walls."
%}



## Challenge

High-speed airflows create a thin boundary layer along solid surfaces. When a shock hits the boundary layer forcefully enough, it may create high-amplitude, low-frequency oscillations that can damage the aircraft. To address this, we need to understand the mechanics of shockwave and turbulent boundary-layer interactions (STBLI) and the fluid-structure interactions (FSI). Researchers have not extensively studied the fluid-structural coupling of STBLIs. While teams have led efforts to investigate the relationships of STBLIs with flexible panels, it is extremely challenging to characterize this class of interactions experimentally. Numerical simulations are crucial to provide these fundamental insights. Several simulation approaches have been tested, but many suffer from high associated computational costs. Approaches that have lower computational costs suffer from lower accuracy.


## Approach

The team used the ALCF’s Theta supercomputer to perform fully coupled fluid-structural 3D simulations of STBL over flexible walls to replicate and complement wind-tunnel experiments. They studied the interactions’ characteristic low-frequency motions on flexible panels using wall-modeled large-eddy simulations (WMLES). This method models rather than resolves the inner boundary layer, reducing the computational cost of the simulation and maintaining the physical fidelity of flow features like separation and reattachment. This approach allows for sufficiently long integration times needed to capture the low-frequency motions of interest. The team coupled the WMLES with a finite-element solid mechanics (FEM) solver to incorporate structural damping. This is the first time researchers have combined these approaches to study such interactions on flexible panels.


## Results

To validate the high-fidelity simulation methodology, the team used WMLES to replicate experiments at different strengths of the incident shock on the turbulent boundary layer. Based on these results, the team assessed the importance of the 3D effects in those interactions by conducting reduced-span simulations with imposed periodicity in the spanwise direction. The simulations replicated the coupled interactions observed experimentally with better accuracy than prior numerical studies, while also providing additional insights into the wind-tunnel experiments.  



## Impact

The ultimate goal of the team’s research is to develop improved modeling techniques for the prediction of fluid-thermal-structural interactions through coupled specialized domain-specific solvers. These techniques will reduce the uncertainty factored into designing hypersonic vehicles and propulsion systems, leading to safer and more precise aircraft designs. This work, directly validated by x-ray free electron laser, ultrafast electron diffraction, and neutron experiments at DOE facilities, will enable future production of high-quality custom quantum material architectures for broad and critical applications for continued U.S. leadership in technology development, including that for sustainable ammonia, thereby addressing DOE basic research needs for transformative manufacturing and quantum materials. The Allegro–Legato model exhibits excellent computational scalability and GPU acceleration in carrying out NNQMD simulations, with strong promise for emerging exascale systems.
