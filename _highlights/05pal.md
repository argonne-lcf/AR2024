---
layout: highlight

theme: white
permalink: 'science/highlights/pal'

title: 'Robust Gas Turbine Film Cooling Under Manufacturing Uncertainty for Improved Jet Engine Lifecycle Energy Efficiency'
pi: 'Pinaki Pal and Muhsin Ameen, Argonne National Laboratory'
award: 'Director’s Discretionary'
systems: 'Polaris'
field: 'Engineering'
sdl: 's, l'

image: 'Wu.png' 
image-caption: 'Contour plot of velocity magnitude on a vertical cut plane from wall-resolved large-eddy simulation of a canonical gas turbine film cooling configuration with a rough cooling hole. The simulation was carried out at the ALCF as part of a collaboration between Argonne and RTX Technology Research Center.'
image-credit: 'Ibrahim Jarrah, Pinaki Pal, and Muhsin Ameen, Argonne National Laboratory'

publications:
  - authors: 'Jarrah, I., P. Pal, M. Ameen, and M. M. Joly'
    title: 'Wall-Resolved LES Study of Shaped-Hole Film Cooling Flow for Varying In-Hole Surface Roughness'
    source: 'AIAA Aviation Forum and ASCEND 2024'
    date: 'July 2024'
    publisher: 'American Institute of Aeronautics and Astronautics'
    url: 'https://doi.org/10.2514/6.2024-4262'
    
    
---

{% include txt-intro.html 
    blurb = "Gas turbines in aircraft operate at extreme temperatures, making efficient cooling strategies essential for preventing thermal damage and extending component lifetimes. As next-generation aircraft engines become more compact and run at higher pressures, managing increased heat loads becomes even more critical. To address this challenge, researchers from RTX Technology Research Center and Argonne National Laboratory are using DOE supercomputers to better understand cooling flow physics, providing insights that can help inform more effective turbine cooling designs."
%}



## Challenge

Film cooling is a widely used technology for protecting turbine components from intense heat by injecting cooling air through small holes to create a protective layer. Optimizing these designs is challenging due to the complex interactions between flow dynamics, heat transfer, and variations in cooling hole geometry. Surface roughness caused by manufacturing processes or material deposition can degrade cooling performance, often leading to conservative design choices that prioritize durability at the cost of efficiency. To improve turbine cooling, researchers need predictive models that accurately capture near-wall cooling flow physics, heat transfer, and the impact of manufacturing deviations like in-hole surface roughness. While computational fluid dynamics (CFD) simulations are essential for modeling these effects, the computational resources needed to generate fine-grained models of the flow near the turbine walls are often beyond the capabilities of most manufacturers. By leveraging HPC and AI, researchers can enhance modeling accuracy to inform the development of more efficient cooling strategies.



## Approach

With support from DOE's High-Performance Computing for Energy Innovation (HPC4EI) program, the RTX-Argonne team continues its work to use ALCF and OLCF supercomputers to optimize turbine cooling designs. In the first phase of the project, researchers used NekRS, a high-fidelity CFD solver optimized for DOE supercomputers, to analyze how surface roughness inside cooling holes affects coolant flow and heat transfer. Their simulations achieved resolutions unattainable with conventional computing, enabling a more precise assessment of roughness effects. Now in phase two of the project, the team is integrating high-fidelity CFD simulations with machine learning to develop data-driven surrogate models for predicting the impact of in-hole surface roughness on film cooling effectiveness. This approach aims to develop reduced-order models to quantify the impact of manufacturing variability introduced by surface roughness on the performance of film cooling schemes, with implications for energy efficiency and durability of gas turbine engine components.



## Results

In a paper presented at the 2024 AIAA Aviation Forum and ASCEND conference, the team detailed how increased in-hole roughness reduces film cooling effectiveness, with roughness element height having the most significant impact. Comparisons with experimental data revealed that while simulations captured overall trends, discrepancies remained, particularly in cases with higher roughness. Moreover, it was observed that increasing the length of the roughness unit, while keeping the other parameters constant, significantly increases the thermal cooling effectiveness.



## Impact

The team’s research is advancing our understanding of film cooling and its impact on gas turbine performance. By refining predictive high-fidelity CFD models and developing reduced-order surrogate models , their work will enhance turbine cooling designs to maximize efficiency, reduce thermal stress, and extend the lifespan of aircraft engine components. The ongoing effort to integrate machine learning methods with high-fidelity simulations and supercomputing will further pave the way for shrinking design cycles, making advanced cooling designs more efficient and accessible to manufacturers.
