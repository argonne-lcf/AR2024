---
layout: page

title: ALCF Leadership

theme: white
permalink: year-in-review/year-in-review
---



{% include media-img.html
   source= "Allcock_1600x900.jpg"
   caption= "Bill Allcock"
%}

# Bill Allcock, ALCF Director of Operations

One of the most significant changes of the year was the retirement of Theta, Cooley, and the theta-fs0 storage systems. They were great systems that helped our users accomplish a lot of science. From the operations perspective, there is a silver lining in that it reduces the number of systems and makes our operational environment more uniform without them, but it is still sad to see them go.

We made some significant improvements to our systems over the course of the year. 
- The ALCF AI Testbed’s Graphcore and Groq systems were made available for use and all four publicly available tested systems (Cerebras, SambaNova, Groq, and Graphcore) got significant upgrades.
- Polaris network hardware was upgraded from Slingshot 10 to Slingshot 11, doubling the max theoretical bandwidth. We are working on system software upgrades that will include the Slingshot software, programming environment, and NVIDIA drivers.
- The HPSS disk cache was increased from 1PB to 9PB, significantly improving the probability of a “cache hit” and faster data retrieval.

Operationally, we continue to expand our support for DOE's Integrated Research Infrastructure. Much of our initial work was with Argonne’s Advanced Photon Source, and while we continue to work with them, we are also collaborating with other facilities. From the operations side, we are working to make it faster and easier to create new on-demand endpoints. This includes making the endpoints more robust and easier for scientists to manage.

Last, but certainly not least, the Operations team has been decisively engaged in the Aurora bring-up. We have done extensive work to assist in the stabilization efforts. We continue to work on developing software and processes to manage the gargantuan amount of logs and telemetry that the system produces. We have provided support for scheduling. Our system admins have developed extensive prolog and epilogue hooks to detect and, where possible, automatically remediate known issues on the system while the vendors work on a permanent resolution. We have also assisted in supporting the user community. Because of the NDA (Non-Disclosure Agreement) requirements, we set up a special Slack instance to facilitate discussion and have assisted in conducting training.

We continue to collaborate with Altair Engineering and the OpenPBS community. We found some scale-related bugs that were making administration on Aurora slow and difficult. We worked closely with Altair and they provided patch updates very quickly and integrated those fixes into the production releases. We continued our work on porting PBS to the AI Testbed systems, but their unique hardware architectures and constraints have been challenging. However, later in the year, we were forced to table the AI system work and focus on Aurora.


{% include media-img.html
   source= "Kumaran_1600x900.jpg"
   caption= "Kalyan Kumaran"
%}

# Kalyan Kumaran, ALCF Director of Technology

Over the past year, we made considerable progress in deploying Aurora, enhancing our AI for Science capabilities, and advancing the development of DOE’s Integrated Research Infrastructure (IRI). On the Aurora front, our team was instrumental in enabling a partial system run that earned the #2 spot on the Top500 List in November. It was also great to see Aurora’s DAOS storage system place #1 on the IO500 production list. We helped get several early science applications up and running on Aurora – some of which have scaled to 2,000 nodes with very promising performance numbers compared to other GPU-powered systems. Our team also made some notable advances with scientific visualizations, demonstrating interactive visualization capabilities using blood flow simulation data generated with the HARVEY code on Aurora hardware and producing animations from HACC cosmology simulations that ran at scale on the system.

We continued to work closely with Intel to improve and scale oneAPI software, bringing many pieces into production. On Aurora, the AI for Science models driving the deployment of AI frameworks (TensorFlow, PyTorch) have achieved an average single GPU performance more than 2x faster than NVIDIA A100, driven by close collaboration between Argonne staff and Intel engineers. Other efforts included using the Argonne-developed chipStar HIP implementation for Intel GPUs to get HIP applications running on Aurora. To help support Aurora users and the broader exascale computing community in the future, we played a role in launching the DAOS Foundation, which is working to advance the use of DAOS for next-generation HPC and AI/ML workloads, and the Unified Acceleration (UXL) Foundation, which was formed to drive an open standard accelerator software ecosystem. ALCF team members also continued to contribute to the development of standards for various programming languages and frameworks, including C++, OpenCL, SYCL, and OpenMP.

In the AI for science realm, we enhanced the capabilities of the ALCF AI Testbed with two new system deployments (Groq, Graphcore) and two system upgrades (Cerebras, SambaNova). With a total of four different accelerators available for open science research, we partnered with the vendors to host a series of ALCF training workshops, as well as a SC23 tutorial, that introduced each system’s hardware and software and helped researchers get started. The team published a paper on performance portability across the three major GPU vendors' architectures at SC23, demonstrating that all three of them are good for AI for science workloads. The Intel GPU on Aurora demonstrated the best performance at the time of the study. Our staff also contributed to the development of MLCommon’s new storage performance benchmark for AI/ML workloads and submitted results using our Polaris supercomputer and Eagle file system, which demonstrated efficient I/O operations for state-of-the-art AI applications at scale. In addition, we deployed a large language model service on Sunspot and demonstrated its capabilities at Intel’s SC23 booth.

Finally, our ongoing efforts to develop IRI tools and capabilities got a boost with Polaris and the launch of Argonne’s Nexus — a coordinated effort that builds on our decades of research to integrate HPC resources with experiments. We currently have workflows from the Advanced Photon Source and the DIII-D National Fusion Facility running on Polaris, as well as workflows prototyped for DOE’s Earth System Grid Federation and Fermilab’s flagship Short Baseline Neutrino Program. Our team also delivered talks to share our IRI research at the Monterey Data Conference, the Smoky Mountains Computational Sciences and Engineering Conference, Confab23, and the DOE booth at SC23. With momentum building for continued advances in our IRI activities, the Aurora deployment, and AI for science, we have a lot to look forward to in 2024.

{% include media-img.html
   source= "Ramprakash_1600x900.jpg"
   caption= "Jini Ramprakash"
%}

# Jini Ramprakash, ALCF Deputy Director

It was a busy year for the ALCF as we continued to make strides in deploying new systems, tools, and capabilities to support HPC- and AI-driven scientific research, while also broadening our outreach efforts to engage with new communities. In the outreach space, we partnered with colleagues at the Exascale Computing Project, NERSC, OLCF, and the Sustainable Horizons Institute to host DOE’s first “Intro to HPC Bootcamp.” With an emphasis on energy justice and workforce development, the event welcomed around 60 college students (many with little to no background in scientific computing) to use HPC for hands-on projects focused on making positive social impacts. It was very gratifying to see how engaged the students were in this immersive, week-long event. The bootcamp is a great addition to our extensive outreach efforts aimed at cultivating the next-generation computing workforce.

Our ongoing efforts to develop an Integrated Research Infrastructure (IRI) also made considerable progress this year. As a member of DOE’s IRI Task Force and IRI Blueprint Activity over the past few years, I’ve had the opportunity to collaborate with colleagues across the national labs to formulate a long-term strategy for integrating computing facilities like the ALCF with data-intensive experimental and observational facilities. In 2023, we released the IRI Architecture Blueprint Activity Report, which lays out a framework for moving ahead with coordinated implementation efforts across DOE. At the same time, the ALCF continued to develop and demonstrate tools and methods to integrate our supercomputers with experimental facilities, such as Argonne’s Advanced Photon Source and the DIII-D. This year, Argonne launched the “Nexus” effort, which brings together all of the lab’s new and ongoing research activities and partnerships in this domain, ensuring they align with DOE’s broader IRI vision.

We also made progress toward launching the Argonne Enterprise Registration System, a new lab-wide registration platform aimed at standardizing data collection and processing for various categories of non-employees, including facility users. In 2023, we defined system requirements and issued a request for proposals for building the platform. Ultimately, the new system will help eliminate redundant data entry, simplify registration processes for both users and staff, and enhance our reporting capabilities.

As a final note on 2023, we kicked off the ALCF-4 project to plan for our next-generation supercomputer, with DOE approving the CD-0 (Critical Decision-0) mission need for the project in April. We also established the leadership team (with myself as the project director and Kevin Harms as technical director) and began conversations with vendors to discuss their technology roadmaps. We look forward to ramping up the ALCF-4 project in 2024.

{% include media-img.html
   source= "Riley_1600x900.jpg"
   caption= "Katherine Riley"
%}

# Katherine Riley, ALCF Director of Science

Year after year, our user community breaks new ground in using HPC and AI for science. From improving climate modeling capabilities to speeding up the discovery of new materials and advancing our understanding of complex cosmological phenomena, the research generated by ALCF users never ceases to amaze me.

In 2023, we supported 18 INCITE projects and 33 ALCC projects (across two ALCC allocation cycles), as well as numerous Director’s Discretionary projects. Many of these projects were among the last to use Theta, which was retired at the end of the year. Over its 6+ year run as our production supercomputer, Theta delivered 202 million node-hours to 636 projects. The system also played a key role in bolstering our facility’s AI and data science capabilities. Theta was a remarkably productive and reliable machine that will be missed by ALCF users and staff alike. 

Research projects supported by ALCF computing resources produced 240 publications in 2023. You can read about several of these efforts in the science highlights section of this report, including a University of Illinois Chicago team that identified the exact reaction coordinates for a key protein mechanism for the first time; a team from the University of Dayton Research Institute and Air Force Research Laboratory that shed light on the complex thermal environments encountered by hypersonic vehicles; and an Argonne team that investigated the impact of disruptions in cancer screening caused by the COVID-19 pandemic. 

It was also a very exciting year for Aurora as early science teams began using the exascale system for the first time. After years of diligent work to prepare codes for the Aurora’s unique architecture, the teams were able to begin scaling and optimizing their applications on the machine. Their early performance results have been very promising, giving us a glimpse of what will be possible when teams start using the full supercomputer for their research campaigns next year. 
