---
layout: highlight

theme: white
permalink: 'science/highlights/prince'

title: 'Demonstrating Cross-Facility Data Processing at Scale with Laue Microdiffraction'
pi: 'Michael Prince, Argonne National Laboratory'
award: 'Director’s Discretionary'
systems: 'Polaris'
field: 'Computer Science'
sdl: 'd'

image: 'prince.png' 
image-caption: 'An overview of the systems and elements involved in the data processing system.'
image-credit: 'Michael Prince, Argonne National Laboratory'

publications:
  - authors: 'Prince, M., D. Gürsoy, D. Sheyfer, R. Chard, B. Côté, H. Parraga, B. Frosik, J. Tischler, and N. Schwarz'
    title: 'Demonstrating Cross-Facility Data Processing at Scale with Laue Microdiffraction'
    source: "SC-W 2023: Proceedings of the SC '23 Workshops of The International Conference on High Performance Computing, Network, Storage, and Analysis"
    date: 'November 2023'
    publisher: 'ACM'
    url: 'https://doi.org/10.1145/3624062.3624613'
    
    
---

{% include txt-intro.html 
    blurb = "The ongoing Advanced Photon Source (APS) upgrade project will offer users x-ray beams 500 times more powerful than previously available, with commensurate increases in the amounts of experimental data generated for processing. To meet the demands of the upgrade, a team of researchers led by Argonne National Laboratory developed high-performance software tools and data infrastructure to integrate APS data processing and analysis in near-real time with ALCF computing resources."
%}



# Challenge

The co-location of the ALCF and the APS offers an ideal proving ground for methods to closely integrate supercomputers and experiments for near-real-time data analysis. The research team deployed a fully automated pipeline that uses ALCF resources to rapidly process data obtained from x-ray experiments at the APS. To demonstrate the capabilities of the pipeline, the team carried out a study using a technique called Laue microdiffraction, which is employed at the APS and other light sources to analyze materials with crystalline structures but requires significant computational resources.

# Approach

As a focused x-ray beam passes through a material, individual crystallites along the path of the beam diffract at different angles depending on their orientation. To obtain a full 3D map of the structure, the angle and position of each diffracted beam must be resolved. A new coded aperture Laue reconstruction algorithm is used instead of using a time-intensive scan to complete the analysis, necessitating supercomputers.
The automatic pipeline the team built for processing APS data leveraged infrastructure and tools being deployed between APS and ALCF as part of the Argonne Nexus effort. Globus handles much of the cross-facility data management. The APS Data Management System integrates with Globus Gladier/FuncX workflow tools to provide a single end-to-end data pipeline.

# Results

With ALCF resources, the team demonstrated the on-demand reconstruction of data obtained from the APS beamline, returning reconstructed scans to the APS within 15 minutes of them being sent to the ALCF. Near-ideal scaling for the workflow has been shown on as many as 100 nodes. Continuously using up to 50 nodes on Polaris, it was able to keep up with the data generation rate processing scans, which came in every 1 to 2 minutes throughout 6-to-12 hour runs. The work resulted in a Best Paper Award at the SC23 conference’s XLOOP workshop.

# Impact

The team’s results carry implications for future software development, engineering and beamline science. The parallelization, optimization, and deployment onto Polaris of the Laue microdiffraction technique has enabled full-scale analysis of microdiffraction data. The automated near-real-time reconstruction of coded aperture Laue datasets will enable users of ALCF supercomputing resources to collect data at speeds ten times faster than is currently possible, thereby accelerating the pace of scientific discovery. Furthermore, the full-scale reconstructions produced with Polaris are being used to improve the underlying beamline technique.
