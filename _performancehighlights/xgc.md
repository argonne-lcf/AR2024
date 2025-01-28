---
layout: highlight

theme: dark
permalink: 'features/aurora-performance-highlights/xgc'

title: 'Multiphysics Magnetic Fusion Reactor Simulations: XGC'
pi: 'Choongseok Chang, Princeton Plasma Physics Laboratory'
award: 'Aurora Early Science Program and Exascale Computing Project'

image: 'xgc.png'
---

{% include txt-intro.html 
    blurb = "Developed in tandem with the ECP-supported Whole Device Model Application project—which aims to build a high-fidelity model of magnetically confined fusion plasmas to plan experiments with ITER—XGC is a gyrokinetic particle-in-cell code (with an unstructured 2D grid and structured toroidal grid) used to perform large-scale simulations on DOE supercomputers, and optimized for treating edge plasma."
%}



# Challenge

Specializing in edge physics and realistic geometry, XGC is capable of solving boundary multiscale plasma problems across the magnetic separatrix (that is, the boundary between the magnetically confined and unconfined plasmas) and in contact with a material wall called a divertor, using first-principles-based kinetic equations.

To prepare for the next generation of high-performance computing, the code is being re-implemented for exascale using a performance-portable approach. Running at exascale will yield unique computational capabilities, some of which carry the potential for transformational impacts on fusion science: exascale expansion will make it possible to study, for instance, a larger and more realistic range of dimensionless plasma parameters than has ever been achieved, along with the energy-angle distribution of plasma particles impinging upon the material wall and the full spectrum of kinetic micro-instabilities that control the quality of energy confinement in a toroidal plasma. Further, exascale will enable physics modeling that incorporates multiple-charge tungsten ion species — impurities discharged from the tokamak vessel walls that impact edge-plasma behavior and fusion performance in the core-plasma through migration across the magnetic separatrix. Toward this end, XGC will support a wide array of additional features and modes, including delta-f and full-f, electrostatic and electromagnetic, axisymmetric, neutral particles with atomic cross-sections, atomic number transitions among different impurity states, and coupling physics in constant development.



# Performance Results

Optimization for exascale has required both GPU offloading and algorithmic flexibility. XGC uses the Kokkos programming model as its portability layer, with different backends. Researchers evaluated system performance for a gyrokinetic particle-in-cell simulation of tokamak plasma using C++ to predict ITER fusion reactor plasma behavior with Tungsten impurity ions sputtered from the divertor. Performance on the Aurora test and development system, Sunspot, yielded scaling performance comparable to that of other GPU-based systems, while single-GPU performance was as much as 46 percent greater than was achieved with other systems.

{% include media-img.html
   source= "Chart_XGC_.png"
%}

# Impact
The resulting exascale application will be unique in its computational capabilities. Impacts in fusion science will potentially be transformational. For example, this project will enable a much larger and more realistic range of dimensionless plasma parameters than ever before, with the core and the edge plasma strongly coupled at a fundamental kinetic level based on the gyrokinetic equations; this is to be accomplished by providing the energy-angle distribution of plasmas hitting the material wall, calculating the critically needed Tungsten penetration into the burning core, and assessing the rich spectrum of kinetic micro-instabilities that control the quality of energy confinement in a toroidal plasma (e.g., tokamaks, stellarators).


