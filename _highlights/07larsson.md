---
layout: highlight

theme: white
permalink: 'science/highlights/nakano'

title: 'AI-Guided Exascale Simulations of Quantum Materials Manufacturing and Control'
pi: 'Aiichiro Nakano, University of Southern California'
award: 'INCITE'
systems: 'Polaris'
field: 'Materials Sciences'
sdl: 's,l'

image: 'nakano.png' 
image-caption: 'Allegro–Legato has significantly increased the time to failure, thereby enabling long-time simulation including nuclear quantum effects, which was necessary to explain recent high-resolution inelastic neutron scattering experiments on ammonia.'
image-credit: 'Anikeya Aditya, Thomas Linker, and Ken-ichi Nomura, University of Southern California'

publications:
  - authors: 'Ibayashi, H., T. M. Razakh, L. Yang, T. Linker, M. Olguin, S. Hattori, Y. Luo, R. K. Kalia, A. Nakano, K. Nomura, and P. Vashishta'
    title: 'Allegro-Legato: Scalable, Fast, and Robust Neural-Network Quantum Molecular Dynamics via Sharpness- Aware Minimization'
    source: 'ISC High Performance 2023'
    date: 'May 2023'
    publisher: 'Springer Nature'
    url: 'https://doi.org/10.1007/978-3-031-32041-5_12'
    
    
---

{% include txt-intro.html 
    blurb = "This project aims to boost scalable manufacturing of quantum materials and ultrafast control of their emergent properties on demand using AI-guided exascale quantum dynamics simulations. Neural-network quantum molecular dynamics (NNQMD) simulations based on machine learning are revolutionizing atomistic simulations of materials by providing quantum-mechanical accuracy at speeds orders of magnitude faster than is possible with traditional methods, but face challenges in scaling properly on massively parallel systems."
%}



# Challenge

Despite its remarkable computational scalability, massively parallel NNQMD simulations face a major unsolved issue known as fidelity scaling. In such cases, small prediction errors can propagate and lead to unphysical atomic forces that degrade the accuracy of atomic trajectory over time. These force outliers can even cause the simulation to terminate unexpectedly. As simulations become spatially larger and temporally longer, the number of unphysical force predictions is expected to scale proportionally, which could severely limit NNQMD fidelity on new exascale supercomputing platforms, especially for the most exciting far-from-equilibrium applications.



# Approach

To solve the fidelity-scaling issue, the researchers implemented the Allegro–Legato model in its NNQMD code, RXMD-NN, which was deployed on the ALCF’s Polaris supercomputer. The model was trained using sharpness- aware minimization to regularize its sharpness along with its training loss and thereby enhance its robustness.



# Results

As shown in an _ISC High Performance 2023_ paper, the implemented Allegro–Legato model increases time-to-failure while maintaining the same inference speed and nearly equal accuracy. Specifically, time-to-failure in Allegro–Legato is less dependent on problem size, thus allowing larger-scale and longer-duration NNQMD simulations without failure. Additionally, the researchers demonstrate that the fidelity-scalability of the NNQMD model correlates with sharpness of the model more than the number of parameters in the model.



# Impact

This work, directly validated by x-ray free electron laser, ultrafast electron diffraction, and neutron experiments at DOE facilities, will enable future production of high-quality custom quantum material architectures for broad and critical applications for continued U.S. leadership in technology development, including that for sustainable ammonia, thereby addressing DOE basic research needs for transformative manufacturing and quantum materials. The Allegro–Legato model exhibits excellent computational scalability and GPU acceleration in carrying out NNQMD simulations, with strong promise for emerging exascale systems.
