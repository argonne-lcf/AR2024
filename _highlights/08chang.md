---
layout: highlight

theme: white
permalink: 'science/highlights/kanai'

title: 'First-Principles Simulation of Electronic Stopping Excitation and Beyond'
pi: 'Yosuke Kanai, University of North Carolina at Chapel Hill'
award: 'INCITE'
systems: 'Theta'
field: 'Materials Science'
sdl: 's'

image: 'kanai-highlight.jpg' 
image-caption: 'Simulation cell for solvated DNA. The simulation cell, outlined in black, is shown with periodic boundary conditions for solvated DNA. Blue (orange) isosurfaces represent decreases (increases) in electron density in response to a proton moving through the center of DNA at 0.50 a.u. velocity (6.25 keV).'
image-credit: 'Christopher Shepard, University of North Carolina at Chapel Hill'

publications:
  - authors: 'Shepard, C., D.C. Yost, and Y. Kanai'
    title: 'Electronic Excitation Response of DNA to High-Energy Proton Radiation in Water'
    source: 'Physical Review Letters'
    date: 'March 2023'
    publisher: 'American Physical Society'
    url: 'https://doi.org/10.1103/PhysRevLett.130.118401'

  - authors: 'Shepard, C. and Y. Kanai'
    title: 'Ion-Type Dependence of DNA Electronic Excitation in Water under Proton, α-Particle, and Carbon Ion Irradiation: A First-Principles Simulation Study'
    source: 'The Journal of Physical Chemistry B'
    date: 'November 2023'
    publisher: 'American Chemical Society'
    url: 'https://doi.org/10.1021/acs.jpcb.3c05446'
    
    
---

{% include txt-intro.html 
    blurb = "Proton beam therapy, a promising alternative to conventional X-rays for cancer treatment, relies on understanding the radiation-induced response of DNA. This knowledge not only enhances the treatment by allowing for more precise tumor targeting that minimizes damage to healthy cells, but also holds significance for space missions, where exposure to high-energy protons is a concern for astronauts due to limited data on bodily effects. To help advance our understanding of this complex process, researchers from the University of North Carolina at Chapel Hill are using ALCF supercomputers to study the quantum mechanics involved in the transfer of energy from high-energy protons to DNA."
%}


# Challenge

The lack of molecular-level understanding for the electronic excitation response of DNA to charged particle radiation, such as high-energy protons, remains a fundamental scientific bottleneck in advancing proton and other ion-beam cancer therapies. Specifically, the relationship between high-energy protons and various types of DNA damage poses a significant knowledge void. The ultrafast nature of the excitations makes experimental investigation difficult. However, employing quantum mechanical methods and non-equilibrium simulations can provide valuable insights into the intricate energy transfer process of high-energy protons damaging DNA.

# Approach

In a recent study, the University of North Carolina at Chapel team leveraged the ALCF’s Theta supercomputer to carry out first-principles real-time time-dependent density functional theory simulations to unravel the quantum mechanical details of the energy transfer from high-energy protons to DNA in water. The researchers used the Qb@ll version of the Qbox code for the simulations, which included 3,991 atoms and 11,172 electrons, with six different proton kinetic energies sampled for each proton path. Two proton paths were considered: one directly through center of DNA and another along a sugar-phosphate side chain. By including explicit water molecules in their simulations, the team was able to get a more accurate picture of the DNA excitations in the initial radiation process over the first few femtoseconds. ALCF staff worked with the researchers to aid in employing optimized libraries and to resolve compiling issues. 

# Results

The team’s calculations revealed that high-energy protons transfer significantly more energy to sugar-phosphate side chains than the nucleobases of DNA, and that greater energy transfer is expected onto the DNA side chains than onto water.  The researchers determined the stopping power magnitude for side path was more than three times larger at the peak and at least twice as large at all velocities. As a result of the electronic stopping process, highly energetic holes are generated on the DNA side chains as a source of oxidative damage. The stopping power was found to largely depend on the energetics of holes generated.  Results from these detailed simulations help to fill the knowledge void in understanding detailed mechanisms for extensive DNA strand break lesions observed with a proton beam, and will help inform the development of increasingly more sophisticated multiscale medical physics models.

# Impact

The team’s research into the radiation-induced response of DNA has important implications for human health. Their insights will help researchers develop a more complete understanding of the initial excitation response in proton beam cancer therapy and add to the growing knowledge base for advanced multiscale models in medical physics. The team's findings will also help determine how exposure to radiation, such as cosmic rays in space, can lead to potential health risks due to DNA damage.
