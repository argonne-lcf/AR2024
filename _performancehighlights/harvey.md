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
    blurb = "HARVEY, a massively parallel computational fluid dynamics code that predicts and simulates how blood cells flow through the human body, is used to study the mechanisms driving disease development, inform treatment planning, and improve clinical care.
A team of researchers, led by Duke University, aims to repurpose HARVE to understand metastasis in cancer better.
One in four deaths in the United States is due to cancer, and metastasis is responsible for more than 90 percent of these deaths. The metastatic patterns of circulating tumor cells (CTCs) are strongly influenced by both a favorable microenvironment and mechanical factors such as blood flow.
Advancing the use of data science to drive in situ analysis of extreme-scale fluid-structure- interaction (FSI) simulations, this work aims to leverage the ALCF’s exascale Aurora system to model and analyze the movement of CTCs through the complex geometry of the human vasculature and thereby lay the groundwork for a predictive model of cancer metastasis. Simulating the rare cells, nearby red blood cells, and underlying fluid of the arterial network presents not only a computationally challenging simulation but a large data problem for posterior analysis. Scalable and in situ analysis of massively parallel FSI models, including cellular-level flow, will be critical for enabling new scientific insights into the mechanisms driving cancer progression. 
"
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


