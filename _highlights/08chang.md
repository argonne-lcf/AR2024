---
layout: highlight

theme: white
permalink: 'science/highlights/chang'

title: 'Exascale Gyrokinetic Study of ITER Challenge on Power-Exhaust and ELM-Free Edge'
pi: 'Choongseok Chang, Princeton Plasma Physics Laboratory'
award: 'INCITE, Aurora ESP'
systems: 'Aurora, Polaris'
field: 'Physics'
sdl: 's'

image: 'chang.png' 
image-caption: 'Tungsten density profile in the German tokamak ASDEX-U. Like ITER, ASDEX-U uses a tungsten wall, which allows sputtering of tungsten particles into the core plasma.'
image-credit: 'ALCF Visualization and Data Analytics Team; CS Chang, Princeton Plasma Physics Laboratory'

publications:
  - authors: 'Chang, C. S., S. Ku, R. Hager, J. Choi, D. Pugmire, S. Klasky, A. Loarte, and R. A. Pitts'
    title: 'Role of Turbulent Separatrix Tangle in the Improvement of the Integrated Pedestal and Heat Exhaust Issue for Stationary-Operation Tokamak Fusion Reactors'
    source: 'Nuclear Fusion'
    date: 'April 2024'
    publisher: 'IOP Publishing'
    url: 'https://doi.org/10.1088/1741-4326/ad3b1e'

  - authors: 'Dominski, J., C. S. Chang, R. Hager, S. Ku, E. S. Yoon, and V. Parail'
    title: 'Neoclassical Transport of Tungsten Ion Bundles in Total-f Neoclassical Gyrokinetic Simulations of a Whole-Volume JET-Like Plasma'
    source: 'Physics of Plasmas'
    date: 'March 2024'
    publisher: 'AIP Publishing'
    url: 'https://doi.org/10.1063/5.0144509'
    
    
---

{% include txt-intro.html 
    blurb = "This project aims to significantly advance our understanding of fundamental edge plasma physics in fusion reactors, answering questions critical to the successful operation of ITER and to the design of fusion power plants (FPPs)."
%}


# Challenge

The goal of this project is to perform two-pronged, inter-related fundamental edge physics studies of critical importance to the successful operation of ITER and to the design of FPPs. The first prong is the mitigation of high stationary heat-flux densities that will damage material walls while maintaining the high edge plasma pedestal within a safe operational window. The second prong is avoiding explosive transient power flow to material walls caused by edge localized mode crash.

# Approach

Achieving their goals necessitates that the researchers employ DOE supercomputing resources. The team uses the electromagnetic edge gyrokinetic particle-in-cell code XGC, which enables the inclusion of two important but computationally expensive components: (a) the addition of tungsten impurity particles that are sputtered from ITER’s material wall as a third species along with deuterium and tritium fuel particles, and (b) the capability for plasma detachment from the divertor plates. Tungsten impurity particles, beyond their deleterious effect of radiating away plasma energy in the core, are known to significantly impact the edge physics, and the detached plasma is known to significantly reduce the divertor heat load.

# Results

A paper published in _Physics of Plasmas_ demonstrated the application of a bundling technique to model the diverse charge states of tungsten impurity species in total-f gyrokinetic simulations. XGC was used to simulate a JET H-mode-like plasma across an entire plasma volume, spanning from the magnetic axis to the divertor. Tungsten impurities were found to affect the deuterium fluxes of particles and heat.

# Impact

As fusion power represents a paradigm-shifting breakthrough, success of the ITER project is a high-priority challenge for the DOE mission, which will ultimately lead to more economical FPPs. To accomplish this goal, simulations based on first-principles must be deployed to solve issues with power exhaust, including mitigating stationary heat-flux densities and avoiding unacceptably high transient power flow to material walls.
