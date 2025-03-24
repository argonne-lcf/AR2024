---
layout: highlight

theme: white
permalink: 'science/highlights/jiang'

title: 'Microscopic Insight into Transport Properties of Li-Battery Electrolytes'
pi: 'Wei Jiang, Argonne National Laboratory'
award: 'ALCC'
systems: 'Polaris,Theta'
field: 'Chemistry'
sdl: 's'

image: 'yu.png' 
image-caption: 'a–c Snapshot of electrolyte distribution on NMC622 and Li electrodes: cyan-IL cation+; white-H on the PMpyr+ backbone highlight in Fig. 1b; purple-F on the PMpyrf+ backbone; yellow-FSI−; green-Li+. d–f Molecular number density profiles along the z-axis normal to the surface of the NMC cathode (left panels) and lithium anode (right panels). The center of mass of each molecule is used to calculate molecule distribution: a, d (PMpyr)0.8Li0.2FSI electrolyte, b, e (PMpyrf)0.8Li0.2FSI electrolyte and c, f (PMpyrf)0.5Li0.5FSI electrolyte.'
image-credit: 'Liu et al., Nat. Commun. 2023, 14, 3678'

publications:
  - authors: 'Liu, Q., J. Xu, W. Jiang, J. Gim, A.P. Tornheim, R. Pathak, Q. Zhu, P. Zuo, Z. Yang, K.Z. Pupek, E. Lee, C. Wang, C. Liu, J.R. Croy, K. Xu, and Z. Zhang'
    title: 'High-Energy LiNiO2 Li Metal Batteries Enabled by Hybrid Electrolyte Consisting of Ionic Liquid and Weakly Solvating Fluorinated Ether'
    source: 'Advanced Science'
    date: 'October 2024'
    publisher: 'Wiley'
    url: 'https://doi.org/10.1002/advs.202409662'

  - authors: 'Liu, Q., W. Jiang, J. Xu, Y. Xu, Z. Yang, D.-J. Yoo, K.Z. Pupek, C. Wang, C. Liu, K. Xu, and Z. Zhang'
    title: 'A Fluorinated Cation Introduces New Interphasial Chemistries to Enable High-Voltage Lithium Metal Batteries'
    date: 'June 2023'
    publisher: 'Springer Nature'
    url: 'https://doi.org/10.1038/s41467-023-38229-7'
    
    
---

{% include txt-intro.html 
    blurb = "To advance high-energy-density lithium battery chemistries, researchers are working to develop protective interphases that enhance stability and performance. With this project, a team from Argonne National Laboratory is using ALCF supercomputers to perform large-scale molecular dynamics (MD) simulations to uncover the mechanisms behind electrolyte fluorination, a key process for creating such interphases. By identifying how fluorination affects interphase formation and lithium-ion transport, the team’s research provides key insights for designing next-generation electrolytes."
%}



## Challenge

Creating stable, high-performance lithium batteries requires a robust interphase formed by electrolyte decomposition, but identifying the optimal electrolyte formulations is costly and time-consuming. Electrolyte fluorination, the process of introducing fluorine atoms to the electrolyte molecules, has shown to be a promising solution for creating durable protective layers and improving battery stability. However, developing an effective fluorination strategy without relying on extensive lab work remains a significant obstacle. HPC enables researchers to simulate these complex electrochemical interactions at the atomic scale, providing detailed insights into the effects of fluorination on electrolyte behavior.


## Approach

With an ALCC award, the Argonne team employed the NAMD code on the ALCF’s Theta and Polaris supercomputers to conduct extensive MD simulations of electrolyte fluorination effects on protective interphase formation and charge conduction under realistic experimental conditions. The researchers used novel all-atom models for high-capacity Li-metal anodes and Mn-Ni-O cathodes to study atomic-scale interface structural changes induced by fluorination. Enhanced sampling techniques were applied to efficiently explore the dynamics of viscous electrolytes, requiring large timescales beyond brute-force simulations. Multiple replicas of each simulated system were run in parallel, allowing for comprehensive configurational sampling to accurately capture the effects of fluorination on electrolyte-electrode interactions.

## Results

The team’s simulations provide new insights into the fundamental mechanism of fluorination and its effects on battery stability, lifetime, and capacity. Their research identified how fluorination facilitates the formation of a robust protective interphase, which enhances electrolyte stability and improves charge conduction. The work also demonstrated that the electrolytes exhibit distinct behaviors based on their molecular structure—fluorinated diluents with cyclic structures improved lithium-ion mobility, while those with linear structures restricted charge transport. Statistical analysis revealed that fluorination must be applied to specific positions on electrolyte molecules or particular molecular structures of diluents to achieve optimal performance, paving the way for the rational design of future fluorinated electrolytes.

## Impact

This research accelerates electrolyte discovery by reducing reliance on extensive wet-lab experiments, improving safety, and enhancing the rational design of fluorinated electrolytes. The insights gained from the team’s simulations open new pathways for optimizing lithium battery performance, supporting the development of more efficient and longer-lasting energy storage solutions.
