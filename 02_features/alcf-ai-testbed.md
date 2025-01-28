---
layout: page

theme: dark
permalink: features/alcf-ai-testbed

title: ALCF Continues to Expand AI Testbed Systems Deployed for Open Science
hero-img-source: ALCFAITestbed-2023.jpg
hero-img-caption: "The ALCF AI Testbed's Cerebras, Graphcore, Groq, and SambaNova systems are available to researchers across the world."
intro: "The ALCF’s testbed of AI accelerators is enabling the research community to advance the use of AI for data-intensive science."
---

In 2023, the <b>ALCF AI Testbed</b> expanded its offerings to the research community, with the addition of new Graphcore and Groq systems as well as upgraded Cerebras and SambaNova machines. 

The testbed is a growing collection of some of the world’s most advanced AI accelerators available for open science. Designed to enable researchers to explore next-generation machine learning applications and workloads to advance AI for science, the systems are also helping the facility to gain a better understanding of how novel AI technologies can be integrated with traditional supercomputing systems powered by CPUs and GPUs.

The testbed’s newest additions give the ALCF user community access to new leading-edge platforms for data-intensive research projects.

- The new <b>Graphcore Bow Pod64</b> is well-suited for both common and specialized machine learning applications, which will help to facilitate the use of new AI techniques and model types. The Graphcore Bow Pod64 relies on Intelligence Processing Units (IPUs). IPUs are designed to handle the computational demands of AI-driven tasks. These specialized accelerators are equipped with highly efficient memory architectures that include high-bandwidth memory and on-chip memory, and can more easily support specialized software frameworks and libraries necessary for AI workloads.
- The new <b>GroqRack</b> system brings inference-based solutions that will aid in using trained machine learning models to make predictions or discover patterns in complex data. Based on the Tensor Streaming Processor (TSP) architecture, the GroqChip processor includes advanced vector and matrix mathematical acceleration units, and provides for predictable and repeatable performance.
- The upgrade to a <b>Cerebras Wafer-Scale Cluster WSE-2</b> optimizes the ALCF’s existing Cerebras CS-2 system to include two CS-2 engines, enabling near-perfect linear scaling of large language models (LLMs). This capability helps make extreme-scale AI substantially more manageable.
- The upgrade to a second-generation <b>SambaNova DataScale SN30 system</b> enables a wider range of AI-for-science applications, making massive AI models and datasets more tractable to users. In this system, each accelerator is allocated a terabyte of memory, which is ideal for applications involving LLMs as well as high-resolution imaging data from experimental facilities.

Together, the ALCF AI Testbed systems provide advanced data analysis capabilities that also support DOE's efforts to develop an Integrated Research Infrastructure that seamlessly connects advanced computing resources with data-intensive experiments, such as light sources and fusion experiments, to accelerate the pace of discovery.

{% include media-video2x.html
   embed-code1= '<iframe src="https://www.youtube.com/embed/XZ4pNVmQTb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
   caption1= "Venkat Vishwanath Explains that Different Use Cases for AI Inference Workloads"
   embed-code2= '<iframe src="https://www.youtube.com/embed/1Y6E3aCHhU8?si=buiWFDvjp8qWoFny" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
   caption2= "Arvind Ramanathan Talks About the Use of AI in Science"
%}

Scientists are leveraging the ALCF AI Testbed systems for a wide range of data-driven research campaigns. The following summaries provide a glimpse of some of the efforts that are benefitting from the AI accelerators’ advanced capabilities.

# Experimental Data Analysis
Argonne researchers are leveraging multiple ALCF AI Testbed systems to accelerate and scale deep learning models to aid the analysis of X-ray data obtained at Argonne’s Advanced Photon Source (APS). The team is using the ALCF AI Testbed to train models — too large to run on a single GPU — to generate improved 3D images from x-ray data.

They are also exploring the use of the ALCF’s AI platforms for fast-inference applications. Their work has yielded some promising initial results, with various models (PtychoNN, BraggNN, and AutoPhaseNN) showing speedups over traditional supercomputers. ALCF and vendor software teams are collaborating with the APS team to achieve further advances.

# Neural Networks
Graph neural networks (GNNs) are powerful machine learning tools that can process and learn from data represented as graphs. GNNs are being used for research in several areas, including molecular design, financial data, and social networks. ALCF researchers are working to compare the performance of GNN models across multiple ALCF AI Testbed accelerators. With a focus on inference, the team is examining which GNN-specific operators or kernels, as a result of increasing numbers of parameters or batch sizes, can create computational bottlenecks that affect overall runtime.

# COVID-19 Research
An Argonne-led team relied on the ALCF AI Testbed when using LLMs to discover SARS-CoV-2 variants. Their workflow leveraged AI accelerators alongside GPU-accelerated systems including the ALCF’s Polaris supercomputer. One of the critical problems the team had to overcome was how to manage extensive genomic sequences, the size of which can overwhelm many computing systems when establishing foundation models. The learning-optimized architecture of the ALCF AI Testbed systems was key for accelerating the training process. The team’s research resulted in the 2022 Gordon Bell Award Special Prize for COVID-19 Research.


# Battery Materials
Argonne scientists are leveraging the ALCF AI Testbed to aid in the development of an application that combines two types of computations for research into potential battery materials: (1) running physics simulations of molecules under redox and (2) training a machine learning model that predicts that energy quantity. The application uses the machine learning model to predict the outcomes of the redox simulations, helping to identify molecules with the desired capacity for energy storage. The ALCF AI Testbed has enabled shortened latency when cycling between the execution of a new calculation that yields additional training data and when that model is used to select the next calculation.

<br>

{% include media-video.html
   embed-code= '<iframe src="https://www.youtube.com/embed/lLMyjZqci2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
   caption= "The ALCF's Murali Emani leads a hands-on workshop covering use and functionality of the ALCF's AI Testbed."
%}

