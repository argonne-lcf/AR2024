---
layout: highlight

theme: dark
permalink: 'features/aurora-performance-highlights/harvey'

title: 'Extreme-Scale Visualization and Analysis of Fluid-Structure Interactions: HARVEY'
pi: 'Amanda Randles, Duke University'
award: 'Early Science Program'
systems: '-'

image: 'drugdiscovery.png' 

---

{% include txt-intro.html 
    blurb = "High-throughput screening of extensive compound datasets so as to identify advantageous properties—such as the ability to interact with relevant biomolecules (including proteins)—represents a promising direction in drug discovery for the treatment of diseases like cancer as well as for response to epidemics like SARS-CoV-2. However, traditional structural approaches for assessing binding affinity, such as free energy methods or molecular docking, pose significant computational bottlenecks when dealing with quantities of data of this magnitude. To address this, researchers have developed a docking surrogate called the SMILES transformer (ST), which learns molecular features from the SMILES (Simplified Molecular Input Line Entry System) representation of compounds and approximates their binding affinity."
%}



# Challenge

SMILES data are first tokenized using a well-established SMILES-pair tokenizer and then fed into a transformer model to generate vector embeddings for each molecule, effectively capturing the essential information. These extracted embeddings are subsequently fed into a regression model to predict the binding affinity.

Leveraging ALCF leadership-computing resources, the researchers devised a workflow to scale model training and inference across multiple supercomputer nodes. To evaluate the performance and accuracy of the workflow, the team conducted experiments using molecular docking binding affinity data on multiple receptors, comparing ST with another state-of-the-art docking surrogate.




# Performance Results
The researchers have demonstrated HARVEY’s functionality on Aurora for two distinct cases. The first is for fluid-only calculations and the second for fluid and red-blood cell simulations. In both cases, HARVEY ran on full-body human vasculatures. The greatest Aurora scaling feat achieved in 2024 saw the application running on 2048 nodes for the fluid-only simulation. The team deployed HARVEY on 1024 nodes for red-blood cell and fluid simulations.


{% include media-img.html
   source= "Chart_DrugDesign_.png"
   caption= "Screening ~40-60B of the most synthesizable compounds made possible using the system capabilities and software stack on Aurora. * Simplified Molecular Input Line Entry System (SMILES) - Representation for Molecules."
%}

# Impact
The exscale-optimized HARVEY application will offer the ability to create personalized models for individual patients. Blood flow simulations have the potential to greatly benefit diagnosis and treatment of patients suffering from vascular disease. By predicting where metastasized cells might travel in the body, HARVEY can help doctors anticipate early on where secondary tumors may form. Empowering models of the full arterial tree can provide insight into diseases such as arterial hypertension, while enabling the study of how local factors impact global hemodynamics.


