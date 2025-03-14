---
layout: highlight

theme: white
permalink: 'science/highlights/ramanathan'

title: 'MProt-DPO: Breaking the ExaFLOPS Barrier for Multimodal Protein Design Workflows with Direct Preference Optimization'
pi: 'Arvind Ramanathan, Argonne National Laboratory
'
award: 'Director’s Discretionary'
systems: 'Aurora'
field: 'Biological Sciences'
sdl: 's,d,l'

image: 'ma.jpg' 
image-caption: 'Using the MProt-DPO framework, scientists identified synthetic versions of malate dehydrogenase that preserve the protein’s critical structure and key binding areas.'
image-credit: 'Arvind Ramanathan, Argonne National Laboratory'

publications:
  - authors: 'Dharuman, G., K. Hippe, A. Brace, S. Foreman, V. Hatanpää, V. K. Sastry, H. Zheng, L. Ward, S. Muralidharan, A. Vasan, B. Kale, C. M. Mann, H. Ma, Y.-H. Cheng, Y. Zamora, S. Liu, C. Xiao, M. Emani, T. Gibbs, M. Tatineni, D. Canchi, J. Mitchell, K. Yamada, M. Garzaran, M. E. Papka, I. Foster, R. Stevens, A. Anandkumar, V. Vishwanath, and A. Ramanathan'
    title: 'MProt-DPO: Breaking the ExaFLOPS Barrier for Multimodal Protein Design Workflows with Direct Preference Optimization'
    source: 'Proceedings of the SC ’24: International Conference for High Performance Computing, Networking, Storage, and Analysis'
    date: '2024'
    publisher: 'Association for Computing Machinery'
    url: 'https://doi.org/10.1109/sc41406.2024.00013'
    
    
---

{% include txt-intro.html 
    blurb = "The ability to design and discover new proteins drives advances in medicine, catalysis, and numerous other applications. Leveraging AI and some of the world’s most powerful supercomputers, a multi-institutional team led by researchers at Argonne National Laboratory has developed a multimodal framework to accelerate the design of novel proteins."
%}



## Challenge

Mapping a protein’s amino acid sequence to its structure and function is a long-standing research challenge. Each unique arrangement of amino acids—the building blocks of proteins—can yield different properties and behaviors. The sheer volume of potential variations makes it impractical to test them all through experiments alone. AI models offer a way to analyze and predict promising protein structures, but they must integrate diverse data sources to generate reliable designs. By combining AI with high-performance computing, researchers can overcome these challenges and accelerate the discovery process.



## Approach

The team developed MProt-DPO, a scalable, end-to-end workflow for protein design that integrates protein sequences, structural and functional information, and natural language descriptions of biochemical properties while incorporating feedback from experiments and molecular simulations. A key component of their framework is Direct Preference Optimization (DPO), which refines AI-generated protein designs based on fitness landscapes to improve their effectiveness. By leveraging multimodal data, the workflow enables AI to learn directly from experimental and computational feedback, enhancing the reliability of designed proteins. The framework was developed and deployed on five leading HPC systems: ALCF’s Aurora, OLCF’s Frontier, the Swiss National Supercomputing Centre’s ALPS, Cineca’s Leonardo, and NVIDIA’s PDX machine. The team achieved over one exaflop of sustained performance (mixed precision) on each machine, with a peak performance of 5.57 exaflops on Aurora.



## Results

The team tested MProt-DPO on two tasks to demonstrate its ability to handle complex protein design challenges: enhancing the yeast protein HIS7 based on deep mutational scanning data and improving the catalytic efficiency of malate dehydrogenase using molecular simulations. The framework demonstrated the ability to integrate diverse data sources, refine AI-generated sequences, and produce biologically plausible protein variants with high predicted fitness scores. The team is collaborating with Argonne biologists to validate the AI-generated designs in a laboratory, where initial tests have shown they are performing as expected. Their innovative approach was named a finalist for the 2024 Gordon Bell Prize, highlighting its impact in advancing AI-driven science.



## Impact

The team’s development of MProt-DPO marks a major advance in AI-driven protein design, with the potential to greatly accelerate the discovery of new proteins for applications ranging from biodegradation and rare earth extraction to biofuels and biomedicine. By integrating experimental validation into the AI training process, MProt-DPO improves the reliability of generative protein design models. The framework establishes a new benchmark for multimodal AI-driven protein design and contributes to broader AI for science initiatives, including Argonne’s development of AuroraGPT, a foundation model designed to aid in autonomous scientific exploration across disciplines.
