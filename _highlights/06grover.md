---
layout: highlight

theme: white
permalink: 'science/highlights/grover'

title: 'From Quantum Mechanics to Hypersonic Aerothermodynamics'
pi: 'Maninder Grover, University of Dayton Research Institute'
award: 'INCITE'
systems: 'Theta'
field: 'Engineering'
sdl: 's'

image: 'grover.png' 
image-caption: 'Contour of gas velocity along an experimental test article.'
image-credit: 'ALCF Visualization and Data Analytics Team, Air Force Research Laboratory, and University of Dayton Research Institute'

publications:
  - authors: 'Valentini, P., M. S. Grover, A. M. Verhoff, and N. J. Bisek'
    title: 'Near-Continuum, Hypersonic Oxygen Flow over a Double Cone Simulated by Direct Simulation Monte Carlo Informed from Quantum Chemistry'
    source: 'Journal of Fluid Mechanics'
    date: 'July 2023'
    publisher: 'Cambridge University Press'
    url: 'https://doi.org/10.1017/jfm.2023.437'
  - authors: 'Grover, M. S., P. Valentini, and N. Bisek'
    title: 'Ab Initio Investigation of a Hypersonic Double Cone Experiment'
    source: 'Science Advances'
    date: 'February 2025'
    publisher: 'AAAS'
    url: 'https://doi.org/10.1126/sciadv.ads2147'
    
---

{% include txt-intro.html 
    blurb = "The development of hypersonic flight the ability to fly at 5 times the speed of sounds—and related capabilities is now of interest across the globe, potential to revolutionize technologies for national security, aviation, and space exploration. At the core of this research is the pursuit of accuracy in the prediction of the environment surrounding the hypervelocity vehicle.  This work, led by a research team from the University of Dayton Research Institute and Air Force Research Laboratory, replicated a hypervelocity ground-test experiment using the novel direct molecular simulation (DMS) method."
%}



## Challenge

At high Mach numbers, the shock encapsulating a vehicle is strong enough to cause chemical reactions and excitation of internal energy modes in the shock-heated gas. A precise description of these processes is essential to many aspects of flight, especially the heat loads experienced by the vehicle. DMS methods were used to model a reactive Mach 8.2 oxygen flow over a double-cone geometry. The method relies on molecular dynamics guided by interaction potentials grounded in quantum mechanics to construct this complex flow-field. The free-stream conditions and the article configuration generate a flow with thermal, chemical, and mechanical nonequilibrium. 



## Approach

The researchers used a custom, massively parallel version of the SPARTA DSMC code to carry out the DMS simulation on ALCF computing resources. Due to the robust grid adaption and efficient parallelization of the code, the team was able to carry out a DMS of a continuum-scale flow.



## Results

As detailed in _Science Advances_, the team used ALCF computing resources to simulate, for the first time, using a method grounded in quantum mechanics, a full-scale reactive hypersonic flow studied experimentally. Due to the fundamental nature of the simulation technique, this work provides a molecular-level description of internal energy excitation and reaction mechanisms throughout the system. Building on direct simulation monte carlo (DSMC) methods, DMS replaces stochastic collision models for particles in the flow with molecular dynamics calculations using interaction potentials derived from quantum mechanics. These ab initio interaction potentials are the only modeling input in the flow; therefore, all flow features can be attributed the quantum mechanically guided molecular interactions.


## Impact

This was the first-ever quantum mechanically guided simulation of a hypersonic ground test  The team’s research is helping to advance our understanding of the complex aerothermodynamics of hypersonic flight, providing insights that could help inform the design of safer and efficient technologies for space travel and defense. A simulation of such fidelity and detail can be used as a benchmark solution to verify computational fluid mechanics (CFD) codes and assess fundamental gaps and opportunities of improvement for the physics simulated by lower fidelity models. This, in turn, enables robust and accurate CFD solutions to mission-critical scenarios where the flow field may be in thermal and chemical nonequilibrium. 
