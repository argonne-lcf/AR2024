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

For the operations team, and much of ALCF, 2024 was the year of Aurora. It was the single largest effort, involving every aspect of the team, and culminated in the completion of acceptance testing in December. We plan on opening Aurora to users early next year. This concluded an effort that spanned many years and while it was a challenge, I am proud of the operations team for the part they played in bringing Aurora to fruition.

Aurora brought many challenges. From the operations side, one of the challenges was managing the sheer volume of log and monitoring data. To address this, we created a "data lake" that ingests data into Parquet files and then incrementally improves and filters them. It also enables SQL-like queries against the files on disk. We are currently running this in parallel with the ETL (Extract, Transform, Load) processes, but we are likely going to shift to ingesting everything into the data lake and then having our Business Intelligence system perform ETL from there. Many of the AI frameworks have native support for the Parquet files, and this should be a valuable tool for AI researchers moving forward.

While Aurora sometimes felt like the whole of the ALCF universe, it certainly was not the only focus. Polaris, the ALCF’s primary production machine, had a very good year. Although the official numbers are not yet in, we exceeded all our performance metrics, some by a significant margin. Our Integrated Resource Infrastructure (IRI) work also continued apace. With the Advanced Photon Source coming up from their upgrade, we have begun doing production processing of beamline data and expanded the scope of this work to other facilities and science communities. As long-time users are undoubtedly aware, we typically have a weekly or bi-weekly cadence of regular preventative maintenance. To better support the IRI concept, we put significant effort into improving our systems and processes by adding redundancy, enabling maintenance while systems are live, and implementing other measures to minimize disruption. Our target was a maintenance cadence of four months, and we successfully accomplished that on Polaris. We completed a software upgrade on Aurora using an improved process, where the upgrade was treated much like a software development project. This involved using Sirius as the stage system, making all changes and conducting all testing there, before pushing them up to Aurora. It went well, but there is also room for improvement, and we will continue refining this process.

We also brought some new resources online this year. Crux, a CPU-only system originally developed as a testbed for evaluating system software for Aurora, was deployed to users late this year. It is small relative to other ALCF systems at about 1 PF, but it is a non-trivial resource and there is a small, but important, set of science applications that can take advantage of a CPU-only machine. Additionally, we deployed Sophia, a 24-node Nvidia A100 DGX system, in July. Previously part of ThetaGPU, Sophia became a standalone system after Theta’s retirement. It is targeted at smaller workloads that need near-immediate turnaround, such as Jupyter notebooks and interactive visualizations.

The ALCF AI Testbed did not add new systems in 2024, but several upgrades were implemented, and new systems are planned for next year. Resources were also made available to the National Artificial Intelligence Research Resource (NAIRR) pilot, and we supported multiple workshops and an SC24 tutorial.

On the storage front, the most significant change for users was that we enabled the ability for users to share their data on the Eagle and Grand storage systems by default. Users still must create shares, but they no longer need to explicitly request this capability be enabled. Another significant effort on the storage side, that was, by design, completely transparent to the users, was the migration of all data in the Grand filesystem path onto the same hardware as Eagle so we could repurpose the hardware to support Aurora during testing. This isolated the storage for Aurora from the rest of ALCF to avoid the ongoing changes disrupting other production resources. We also completed routine upgrades of the Lustre storage and HPSS.

We also released a significant upgrade to the ALCF account and project management website. Named myALCF, the new platform greatly expands web tools for ALCF users to manage their projects and resources. It offers a dashboard with real-time data graphs to show allocation usage, allocation on-track trends, daily/14-day/monthly job activity, and node usage through a project all at a glance. Additionally, myALCF includes a web tool to help new users learn our sbank accounting tool. The sbank tool also helps seasoned ALCF users to be aware of options in sbank that they may not have seen or used before. With myALCF, users still have all the functionality of the previous accounts and project management system (requesting allocation, managing projects and Unix groups, etc.) in a cleaner user interface. We plan to continue expanding myALCF with an improved cluster accounting (sbank) web presence, web UI for job management, and a user notification framework in the future.



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

In 2024, we ramped up our efforts to plan for the facility’s next-generation supercomputer via the ALCF-4 project. While our latest system, Aurora, is just about ready to make its debut, it’s critical to lay the groundwork for future supercomputers well in advance. We formally launched the ALCF-4 effort in 2023 with a target deployment in the 2028–2029 timeframe. Over the past year, we’ve reached several key milestones: releasing the draft technical requirements in June, conducting a successful technical design review in August, and engaging with potential vendors to assess their technology roadmaps and timelines. The project will gain further momentum next year with major reviews, including Critical Decision-1 (CD-1), which evaluates the project's technical approach, design, and implementation while establishing preliminary cost and schedule estimates.

Our work to plan for future computing resources also extended beyond ALCF-4. We contributed to a charge from the DOE Advanced Scientific Computing Advisory Committee (ASCAC) to develop a 10-year outlook for the DOE computing facilities. This effort culminated in a report outlining the investments and upgrades needed to ensure DOE remains at the forefront of scientific computing.

Workforce development has remained a priority as well. Our annual “Intro to AI” training series continues to provide hundreds of college students with hands-on experience in using AI and supercomputers for science. In addition to training, we offer students the opportunity to apply their skills in real research environments through various appointments and internships at the ALCF. This year, we partnered with the University of Illinois Chicago’s Sprintership program, welcoming five students for three-week internships at the ALCF in the spring—four of whom returned for summer internships to work in their areas of interest. These efforts are part of our broader vision to inspire the next generation of STEM professionals by providing opportunities to explore careers in computing.


{% include media-img.html
   source= "Riley_1600x900.jpg"
   caption= "Katherine Riley"
%}

# Katherine Riley, ALCF Director of Science

Once again, our user community led a number of impressive research campaigns this year, achieving breakthroughs in fields ranging from biology and materials science to cosmology and fusion energy. At the same time, we continued to see more and more projects with complex workflows that integrate simulation, data science, and AI methods, reflecting the growing convergence of these approaches in scientific computing. The year was marked by several high-impact projects, including a collaboration between DOE and NASA to perform simulations that are helping prepare for future observations of the cosmos, and the development of an innovative AI-driven protein design framework that was recognized as a finalist for the Gordon Bell Prize. We also made strides in integrating our supercomputing resources with experimental facilities to speed up data-intensive discoveries, while early science teams on Aurora had some promising pre-production results that hint at the transformative advances to come.

One of the year’s most exciting moments was seeing David Baker, a longtime ALCF user from the University of Washington, receive the 2024 Nobel Prize in Chemistry for his pioneering work in computational protein design. Baker was among the first researchers to use ALCF systems nearly 20 years ago and has since led multiple INCITE projects aimed at designing novel proteins and peptides for medical and industrial applications.

While the Nobel Prize underscores the lasting impact of our community’s efforts, computational protein design represents just one area of the dynamic research portfolio supported by the ALCF. In 2024, we provided computing resources to 31 INCITE projects, 31 ALCC projects (spanning two award cycles), and numerous Director’s Discretionary projects. We also began supporting some of the initial projects awarded through the National AI Research Resource (NAIRR) pilot, providing them with access to the ALCF AI Testbed.

To kick off the year, a multi-institutional team from DOE, NASA, and academia used our now-retired Theta system for a final run before it was decommissioned. The team generated nearly 4 million images of the cosmos to help researchers prepare for upcoming observations from NASA’s Nancy Grace Roman Space Telescope and the NSF-DOE Vera C. Rubin Observatory. By publicly releasing the simulation data, they are enabling the scientific community to refine processing pipelines, improve analysis codes, and prepare to interpret real observations as soon as they start coming in. 

This year also saw major progress toward building an Integrated Research Infrastructure (IRI), a DOE initiative designed to accelerate data-intensive science by connecting supercomputers with large-scale experimental and observational facilities. One of our key partners in this effort is the Advanced Photon Source (APS), a DOE user facility at Argonne. In a demonstration of IRI capabilities, the team used a fully automated pipeline between ALCF and APS to rapidly process data from an X-ray experiment. The researchers reconstructed the experimental data on Polaris and returned results to APS within 15 minutes, highlighting an approach for experiment-time data analysis that can be applied at other facilities.

We also saw some innovative work being carried out by early science team using pre-production time on Aurora. This included the Gordon Bell Prize finalist project that used Aurora and four other powerful supercomputers to develop an AI-driven framework for protein design. In December, another team ran a pair of cosmological simulations on Aurora to explore recent findings from the Dark Energy Spectroscopic Instrument, which hint at new physics beyond the standard model of cosmology. While these early examples offer a preview of Aurora’s impact, we can’t wait to see the discoveries the system will enable when it is released to the broader scientific community next year.
