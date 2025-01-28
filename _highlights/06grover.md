---
layout: highlight

theme: white
permalink: 'science/highlights/grover'

title: 'First-Principles Simulation of Hypersonic Flight'
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
  - authors: 'Grover, M. S., A. M. Verhoff, P. Valentini, and N. J. Bisek'
    title: 'First Principles Simulation of Reacting Hypersonic Flow over a Blunt Wedge'
    source: 'Physics of Fluids'
    date: 'August 2023'
    publisher: 'AIP Publishing'
    url: 'https://doi.org/10.1063/5.0161570'
    
---

{% include txt-intro.html 
    blurb = "Hypersonic flight, the ability to fly at more than five times the speed of sound, has the potential to revolutionize technologies for national security, aviation, and space exploration. However, a fundamental understanding of the aerothermodynamics of hypersonic flight is needed to enable technological advances in this field. A research team from the University of Dayton Research Institute and Air Force Research Laboratory is using ALCF supercomputers to shed light on the complex thermal environment that hypersonic vehicles encounter."
%}



# Challenge

Strong shockwaves formed during hypersonic flight can cause the excitation of internal energy modes, and chemical reactivity in the shock heated gas. The rate processes for these phenomena competes with the local flow time, causing the flow to be in thermal and chemical nonequilibrium. Proper characterization of this state is important for designing the required thermal protection systems for hypersonic vehicles. A key challenge is to ensure that reduced-order models used in computational fluid dynamics codes can capture the strong coupling between fluid mechanics of the gas flow, gas-phase thermochemistry, and transport properties at high temperatures. Traditionally, these physics have been investigated separately by producing simplified models that tend to reproduce only certain aspects of high-speed, reacting flows.



# Approach

With this INCITE project, the team is running a custom version of the SPARTA Direct Simulation Monte Carlo (DSMC) code on ALCF computing resources to carry out direct molecular simulations (DMS) of hypersonic experiments. Their goal is to conduct simulations that rely solely on molecular-level interactions modeled using quantum mechanics, providing a fundamental comparison with experiments, and well-characterized solutions that can be used as benchmarks for reduced-order models.



# Results

In a new study published in the _Journal of Fluid Mechanics_, the team detailed a large-scale, fully resolved DSMC computation of a non-equilibrium, reactive flow of pure oxygen over a double cone (a canonical hypersonic test case). The researchers used their highly accurate DMS method to obtain first-principles data to inform the parameters of the thermochemical and transport collision models. Their computations show good agreement with heat flux and pressure measured on the test article during the experiment. The computation also provided molecular-level insights such as the nonequilibrium distribution of energy in the kinetic and vibrational modes in the shock layer. The team’s results show the importance of particle methods in verifying physical assumptions made by reduced-order models.



# Impact

The team’s research is helping to advance our understanding of the complex aerothermodynamics of hypersonic flight, providing insights that could help inform the design of safer and efficient technologies for space travel and defense.
