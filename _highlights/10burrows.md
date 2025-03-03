---
layout: highlight

theme: white
permalink: 'science/highlights/uzdensky'

title: 'Electron Kinetic Plasma Physics of Black Hole Accretion Flows'
pi: 'Dmitri Uzdensky, University of Colorado'
award: 'INCITE'
systems: 'Theta'
field: 'Physics'
sdl: 's'

image: 'Uzdensky.png' 
image-caption: 'Evolution of the pair-plasma MRI in a small 3D box (2 × 2 × 2 λ 3 MRI, where λMRI is the most unstable MRI wavelength), showing the spatial distribution of the radial (Bx) and toroidal (By) magnetic field at subsequent times during the simulation (in terms of P0, the orbital period). '
image-credit: 'Dmitri Uzdensky, University of Colorado'

publications:
  - authors: 'Bacchini, F., L. Arzamasskiy, V. Zhdankin, G. R. Werner, M. C. Begelman, and D. A. Uzdensky'
    title: 'Fully Kinetic Shearing-Box Simulations of Magnetorotational Turbulence in 2D and 3D. I. Pair Plasmas'
    source: 'The Astrophysical Journal'
    date: 'October 2022'
    publisher: 'American Astronomical Society'
    url: 'https://doi.org/10.3847/1538-4357/ac8a94'
    
    
---

{% include txt-intro.html 
    blurb = "Accretion flows around supermassive black holes at the centers of galaxies emit electromagnetic radiation that is critical to understanding these active galactic nuclei, which influence galactic evolution. Interpreting observed radiation, however, requires detailed modeling of the complex multiscale plasma processes in accretion flows. Using petascale 3D particle-in-cell (PIC) simulations,this project investigates electron versus ion energization, nonthermal particle acceleration, and self-consistent synchrotron radiation for plasma processes likely ubiquitous in black-hole accretion, including plasma turbulence driven by the magnetorotational instability (MRI) or other forces, and collisionless magnetic reconnection."
%}



# Challenge

The team has identified three key links in the chain of plasma processes that lead from gravitational attraction of matter around a black hole to accretion and radiation. The development of the MRI leads to outward angular momentum transport that allows accretion; it also generates turbulence and current sheets leading to magnetic reconnection, both of which result in particle energization and hence radiation.



# Approach

To perform simulations, the researchers deployed the Zeltron application on ALCF supercomputers. Zeltron models relativistic, radiating, and rotating astrophysical plasmas from first principles using an explicit finite-difference time-domain, radiative electromagnetic PIC code. Zeltron can include the radiation reaction force (due to synchrotron and inverse Compton emission) in the particles’ equations of motion, and simulate shearing box boundary conditions appropriate for studying MRI in black hole accretion disks.



# Results

As detailed in a paper published in _The Astrophysical Journal_, the researchers explored nonlinear development of MRI turbulence in a pair plasma, employing fully kinetic PIC simulations in two and three dimensions carried out on Theta. This included studying the axisymmetric MRI with 2D simulations, explaining how and why the 2D geometry produces results that differ substantially from 3D MHD expectations; and then performing the largest such 3D simulations carried out to date, for which the team employed a novel shearing-box approach, demonstrating that 3D PIC models can reproduce mesoscale MRI dynamics in sufficiently large runs. Using the fully kinetic simulations, the team was able to describe the nonthermal particle acceleration and angular-momentum transport driven by the collisionless MRI.



# Impact

The work takes a critical step toward understanding the behavior of black holes in the universe. The simulations of plasma processes and energy conversion mechanisms in black hole accretion flows will be used to inform global magnetohydrodynamics computational and theoretical modeling, thus accounting for kinetic processes to predict radiation output and enable comparison to observations. Moreover, these simulations have the potential to significantly advance computational plasma physics.
