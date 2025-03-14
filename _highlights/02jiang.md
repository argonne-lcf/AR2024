---
layout: highlight

theme: white
permalink: 'science/highlights/jiang'

title: 'Assessment of Turbulent Prandtl Number for Heavy Liquid Metal Flow in a Bare Rod Bundle'
pi: 'Yiqi Yu, Emily Shemon, Argonne National Laboratory'
award: 'ALCC'
systems: 'Theta'
field: 'Energy Technologies'
sdl: 's'

image: 'yu.png' 
image-caption: 'Representative open structures from accelerated trajectories along the identified six reaction coordinates. The reference semi-open structure is colored white and atoms are colored green, red, and blue according to its weight in the reaction coordinates.'
image-credit: 'Ao Ma, University of Illinois Chicago'

publications:
  - authors: 'Yu, Y., E. Shemon, and E. Merzari'
    title: 'LES Simulation on Heavy Liquid Metal Flow in a Bare Rod Bundle for Assessment of Turbulent Prandtl Number'
    source: 'Nuclear Engineering and Design'
    date: 'April 2023'
    publisher: 'Elsevier'
    url: 'https://doi.org/10.1073/pnas.2214906119'
    
    
---

{% include txt-intro.html 
    blurb = "Westinghouse Electric Company is working with an international team to develop its next-generation high-capacity nuclear power plant based on lead-cooled fast reactor technology. Using ALCF supercomputers, researchers from Argonne National Laboratory are collaborating with the company to provide insights into the reactor’s flow physics and heat transfer mechanisms."
%}



## Challenge

Lead-cooled fast reactors are a type of nuclear reactor design that offer many advantages, including the ability to operate at higher thermal efficiencies than existing commercial light water reactors. Developing these advanced reactors poses challenges due to the unique characteristics of heavy liquid metal (HLM) coolants, such as a low Prandtl number (Pr) compared to water. Existing turbulence models are inadequate for accurately predicting heat transfer in HLM flows, making the selection of an appropriate turbulent Prandtl number (Pr<sub>t</sub>) critical. Accurate modeling and simulation of heat transfer and mixing in the HLM coolant is needed to help prepare the technology for licensing.


## Approach

For this effort, the team performed large eddy simulations (LES) using the open-source Nek5000 code on ALCF’s Theta system to study nuclear fuel rod bundles with HLM flows. LES do not require a Pr<sub>t</sub> to model turbulence-driven heat transfer, and thus can be used as benchmarks for selecting a Pr<sub>t</sub> in a less computationally expensive Reynolds Averaged Navier–Stokes (RANS) model which requires this parameter.


## Results

In a paper published in _Nuclear Engineering and Design_, the researchers showed that the selection of the appropriate Pr<sub>t</sub> significantly impacts the accuracy of simulations for advanced nuclear reactors. By analyzing a prototypical lead-cooled fast reactor assembly with different Pr<sub>t</sub> values, the team found that inappropriate Pr<sub>t</sub>can introduce error in Nusselt number (a measure of heat transfer) by up to 44 percent. They also compared detailed temperature distributions obtained by computationally expensive LES and less expensive RANS simulations to better understand the deviation introduced by the turbulence model. The analysis shows that the RANS model with Pr<sub>t</sub>=1.5 shows the best agreement with LES on the prediction of local temperature distribution and global Nusselt number. 



## Impact

The team’s research is helping to enhance the understanding and modeling of heavy liquid metal flow behavior and heat transfer mechanisms for next-generation nuclear reactors. In addition, their study provides valuable high-fidelity reference data that can be used by the nuclear reactor research community to validate and calibrate less computationally expensive models.
