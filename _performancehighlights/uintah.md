---
layout: highlight

theme: dark
permalink: 'features/aurora-performance-highlights/hacc'

title: 'Reverse Monte-Carlo Radiative Ray Tracing Calculations at Scale: Uintah'
pi: 'Martin Berzin, The University of Utah'
award: 'Aurora Early Science Program'
systems: '-'

image: 'Habib-HACC.png' 

---

{% include txt-intro.html 
    blurb = "The Uintah Computational Framework, an open-source asynchronous many-task (AMT) runtime system, has been modified to be performance and large-scale portable across exascale DOE supercomputing systems, including Aurora. This work is the culmination of Uintah’s decade-long preparation for DOE exascale systems through highly collaborative multidisciplinary efforts pursued as a part of Predictive Science Academic Alliance Program (PSAAP) II and the Aurora Early Science Program. Notable updates to Uintah’s support for Kokkos were required to make this extension possible through Uintah’s adoption of a portable MPI+X hybrid parallelism approach using the Kokkos performance portability library (i.e., MPI+Kokkos)."
%}



# Challenge

The challenge of being able to scale application codes to hundreds and thousands of processes based on the Asynchronous Many-Task (AMT) Uintah framework on Aurora is addressed by considering a challenging Reverse Monte-Carlo Ray Tracing radiation benchmark calculation, central to the University of Utah’s predictive boiler simulations. This benchmark involves potentially global all-to-all communication and uses adaptive mesh refinement and ray tracing to achieve scalability. This benchmark has been used as part of previous scalability studies on a number of pre-exascale systems and the DOE Frontier exascale system at nearly full machine (9216 Frontier nodes, 98 percent of full system).


# Performance Results
Running on Aurora, the team was able to achieve strong-scaling results for the Burns and Christon benchmark problem on a 2-level structured adaptive mesh refinement grid with more than 129 billion cells, from 1280 nodes up to 10,240 nodes. Results show that good strong-scaling efficiency is achievable. At higher node count, results are not unexpected due to communication costs related to the global all-to-all nature of radiation.

These large-scale studies explored the impact of a larger refinement ratio to determine if aggressive mesh refinement will make full-system runs possible. It is fortunate that the Uintah runtime systems have proved to be exceptionally capable when it comes to enabling Uintah to run in a scalable way on Aurora. 

{% include media-img.html
   source= "Chart_CRK_HACC_.png"
%}

# Impact
The scalability results obtained are a promising start and help show the capabilities of Uintah as an exascale AMT runtime system and pave the way for scientific simulations, such as fluid-structure interaction problems or simulations of turbulent reacting flows at unprecedented sizes on exascale machines. Additional work is underway to improve performance and to better understand how to balance computation loads vs communications costs at the largest scales.
