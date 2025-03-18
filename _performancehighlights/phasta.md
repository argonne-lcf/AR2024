---
layout: highlight

theme: dark
permalink: 'features/aurora-performance-highlights/gamess'

title: 'Machine Learning-Guided Computational Fluid Dynamics at Extreme Scales'
pi: 'Kenneth Jansen, University of Colorado'
award: 'Aurora Early Science Program, INCITE'
systems: '-'

image: 'gamess.png' 

---

{% include txt-intro.html 
    blurb = "GAMESS, or General Atomic and Molecular Electronic Structure System, is a general-purpose electronic structure code for computational chemistry. Full-scale utilization of the Aurora system will enable GAMESS users to carry out demanding tasks like computing the energies and reaction pathways of catalysis processes within a large silica nanoparticle.<br><br>Through computation of a well-defined representative heterogeneous catalysis problem comprising mesoporous silica nanoparticles, GAMESS has demonstrated the capability to model physical systems requiring chemical interactions that involve many thousands of atoms, indicating a new ability to model complex chemical processes."
%}



# Challenge
GAMESS is written in Fortran and uses OpenMP to off-load the code onto graphical processing units (GPUs). The computations are done using the effective fragment molecular orbital (EFMO) framework in conjunction with the resolution-of-the-identity second-order Møller–Plesset perturbation (RI-MP2) method. The project is developing ab-initio fragmentation methods to more efficiently tackle problems in computational chemistry, such as heterogeneous catalysis, and has the ultimate goal of enabling quantum chemistry to be applied to extremely large systems of interest in catalysis and energy research. Programming models include linear algebra libraries and CUDA, as well as HIP/DPC++ and OpenMP.

To take full advantage of exascale architectures, it is critical that application software be developed that can exploit multiple layers of parallelism and take advantage of emerging low-power architectures that dramatically lower energy and power costs without significant negative impacts on time-to-solution. To attain exascale performance, GAMESS will be refactored in accordance with modern computer hardware and software, thereby greatly expanding the capabilities of the codeveloped C++ libcchem code.

# Performance Results
In 2023, the GAMESS team leveraged the Aurora system to perform simulations of silica nanoparticles surrounded by thousands of water molecules, scaling on up to 512 nodes of the system. Results have demonstrated performance some 2.5 times greater than was achieved using other tested architectures.

{% include media-img.html
   source= "Chart_GAMESS_.png"
%}

# Impact
The high-resolutions simulations of turbulent flows at high Reynolds numbers performed will help refine the turbulence models currently available, while improving the robustness and accuracy of turbine models. These models can in turn be used for improved design of aircraft and other mechanical systems.

This project provides a scalable and performant solution to performing in situ machine learning in the exascale era, thereby unlocking the ability to access much richer datasets for training ML models from scientific simulations. Additionally, accuracy and uncertainty quantification metrics obtained from the ongoing training inform the data-generation process within the simulation, which can lead to intelligent data sub-sampling techniques to train models on fewer data samples and at reduced energy cost.

