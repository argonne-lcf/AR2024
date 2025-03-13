---
layout: highlight

theme: white
permalink: 'science/highlights/burrows'

title: 'State-of-the-Art High-Resolution 3D Simulations of Core-Collapse Supernovae'
pi: 'Adam Burrows, Princeton University'
award: 'INCITE'
systems: 'Polaris, Theta'
field: 'Physics'
sdl: 's'

image: 'burrows.png' 
image-caption: 'Representative depiction of a generic feature of core-collapse explosions by the turbulence-aided neutrino-driven mechanism. There is often a simultaneous explosion in one general direction and accretion in a very roughly perpendicular direction when the explosion time is delayed by a few hundred milliseconds, and a more spherical explosion when it is launched early as for an initially nonrotating (or slowly rotating), low-compactness progenitor, such as this 9 M☉ model.'
image-credit: 'ALCF Visualization and Data Analytics Team; Princeton University'

publications:
  - authors: 'Burrows, A., T. Wang, D. Vartanyan, M. S. B. Coleman'
    title: 'A Theory for Neutron Star and Black Hole Kicks and Induced Spins'
    source: 'The Astrophysical Journal'
    date: 'February 2024'
    publisher: 'American Astronomical Society'
    url: 'https://doi.org/10.3847/1538-4357/ad2353'
    
    
---

{% include txt-intro.html 
    blurb = "Supernovae shape the universe and life as we know it, but the physical mechanisms that cause a star to explode remain a mystery. Using ALCF supercomputing resources, a team from Princeton University has been generating one of the largest collections of 3D supernova simulations to shed light on the physics behind these cosmic events."
%}



# Challenge

Modeling the physics of supernovae has posed a persistent challenge to astrophysicists for decades. Models must not only be shown to explode, but must reach the asymptotic state of the blast to determine many of the observables. Many relevant simulations have been developed. However, the necessary sophisticated and expensive 3D simulations typically have not run long enough after bounce to capture asymptotic kick speeds. Even the few existing longer-term studies do not explore the systematics with the broad range of progenitor masses to determine the relationships between the kick speed and progenitor mass or the initial core structure.



# Approach

The team carried out 20 state-of-the-art 3D long-term core-collapse simulations generated using the code FORNAX. They performed these simulations on multiple supercomputers, including the ALCF’s Theta and Polaris systems. The researchers focused their study on the kicks during the simultaneous accretion and explosion phase, with attention towards the crucial first few seconds post-bounce. They then complemented their kick study with a study of the associated induced spins. The ALCF Catalyst team provided support to transition the code to Polaris (NVIDIA GPUs) and has worked with the researchers to port the FORNAX GPU version to Aurora to enable exascale simulations.



# Results

For the first time, using a large and uniform collection of 3D supernova models ranging from 9 to 60-solar-mass stars, the researchers asymptoted the kicks or came within 20 percent of doing so. They obtained an integrated and wide-angle perspective of the overall dependence of the recoil kicks and induced spins upon progenitor mass and their Chandrasekhar-like core structures, the latter indexed approximately by compactness. The team found that the mass and compactness of the progenitors directly correlated to the size of the neutron star’s kicks. These two classes can be correlated to the gravitational mass of the residual neutron star, which suggests the survival of binary neutron star systems may be due to their lower observed kick speeds. Their new 3D model suite provides a greatly expanded perspective and appears to explain some observed pulsar properties by default.



# Impact

The team’s simulations represent the largest set of long-term 3D state-of-the-art core collapse simulations ever created. These simulations lay the groundwork for more comprehensive research that will address other aspects and outcomes of core collapse and their dependence upon progenitors. These simulations provide a qualitative picture, paving the way to develop a quantitative explanation of the survival of binary neutron star systems.  
