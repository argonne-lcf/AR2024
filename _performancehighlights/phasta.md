---
layout: highlight

theme: dark
permalink: 'features/aurora-performance-highlights/phasta'

title: 'Machine Learning-Guided Computational Fluid Dynamics at Extreme Scales'
pi: 'Kenneth Jansen, University of Colorado'
award: 'Aurora Early Science Program, INCITE'
systems: '-'

image: 'phasta.png' 

---



{% include txt-intro.html 
    blurb = "This University of Colorado-led effort is aimed at developing a scalable framework to enable in-situ machine learning (ML) capabilities from exascale simulations, with the goal of using high-fidelity data from direct numerical simulations (DNS) of complex, wall-bounded turbulent flows to train accurate and generalizable sub-grid stress models for large eddy simulations (LES). The LES performed using the PHASTA application—with up to a billion degrees of freedom—will help elucidate the physics of flow separation at high Reynolds numbers, aiding the design of more aerodynamic and efficient aircraft.<br><br>The project also aims to address I/O bottlenecks accentuated by the rise of exascale computing. Aurora enables simulations to be conducted at unprecedented scales, producing more data than ever before—but also producing bottlenecks via the traditional practice of saving the simulation data to disk. By performing ML model training concurrently with DNS, researchers can avoid the file system altogether and efficiently stream data between simulation and ML training modules, storing the necessary data in-memory on the compute nodes and ensuring the capture of all the simulation physics generated throughout the workflow."
%}



## Challenge
A main challenge the developers faced was translating the legacy, FORTRAN-based PHASTA application code—optimized for central processing unit- (CPU-) powered computing systems—to run on exascale graphics processing unit- (GPU-) based architectures. PHASTA’s compilers and code structures did not readily lend themselves to GPUs, leading the developers to leverage the libCEED application library, developed under the aegis of the Exascale Computing Project. libCEED adds wrapper functions to architecture-agnostic codes for physical models such that the models can be run in a finite-element framework. libCEED minimizes global traffic through the GPU memory hierarchy, effectively boosting performance.

Enabling the online ML component required that the developers ensure the framework for carrying out large-scale, high-fidelity DNS alongside distributed ML training (as well as the periodic transfer of terabyte-scale training data) scale to thousands of nodes with minimal overhead. To this end, the development team leveraged the open-source library SmartSim, allowing them to decouple the data transfer between simulation and training by staging the data in a database deployed on the compute nodes. In this way, the rate of data production from the simulation is completely independent of the data consumption rate of the ML training, with neither component blocking the progress of the other. Additionally, the team spearheaded a co-located framework with SmartSim which places all components (simulation, training, and database) on the same set of nodes, sharing the available CPU and GPU resources. With this approach, all training data transfers between simulation and ML training are confined within a single node: even though both the simulation and distributed training span thousands of nodes, the framework is, in effect, made scalable.



## Performance Results
The development team has been able to run the PHASTA application on Aurora using as many as 4096 nodes; depending on the problem size, the team has achieved a desirable timestep on the order of 0.6 seconds.

Scaling on up to 1536 nodes, the total overhead generated by the computational fluid dyanmics (CFD) simulation and ML trainer has remained small—approximately 5 percent of runtime—and, importantly, effectively constant. These results have demonstrated that the framework is both performant and scalable.


{% include media-img.html
   source= "AR2024_Phasta-chart.png"
   caption= "Relative overhead generated by the CFD simulation and the ML trainer’s communication of data to and from the database as the PHASTA application scaled from 1 to 1536 nodes on Aurora—that is, how much the framework slows down the progress of the simulation and ML training as a fraction of the runtime. The plots demonstrate small and constant overhead."
%}

## Impact
Bringing PHASTA to Aurora has provided a scalable and performant solution to performing in-situ ML at exascale, thereby enabling researchers to access and utilize much richer datasets for training ML models using simulation-generated data. Additionally, accuracy and uncertainty quantification metrics obtained from the ongoing training inform the data-generation process within the simulation, which can help permit intelligent data sub-sampling techniques that train models on fewer data samples with reduced energy costs.

Performing high-resolution simulations of turbulent flows at high Reynolds numbers will help refine the turbulence models currently available. These models can in turn be used for improved design of aircraft and other mechanical systems.


