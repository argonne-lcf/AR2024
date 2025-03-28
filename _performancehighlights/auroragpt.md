---
layout: highlight

theme: dark
permalink: 'features/aurora-performance-highlights/connectomics'

title: 'A Large-Scale Foundation Model for Advancing Science: AuroraGPT'
pi: 'Rick Stevens, Argonne National Laboraotory'
award: 'INCITE'
systems: '-'

image: 'Ferrier-connectomics.png' 


---

{% include txt-intro.html 
    blurb = "The AuroraGPT project leverages DOE supercomputing resources to develop and enhance understanding of powerful foundation models (FMs) such as large language models (LLMs), for science. By creating FMs for science—while developing underlying capabilities, tools and workflows, data resources, and other processes and artifacts—Argonne Argonne aims to significantly improve how science is conducted, by fostering a deeper integration of AI capabilities into research workflows. To this end, Argonne’s AuroraGPT project is creating and evaluating a series of increasingly powerful FMs, each with more parameters and/or trained on more data than those that precede it, designed to assist researchers in making more informed and efficient discoveries. The AuroraGPT research program focuses on producing this sequence of models while ensuring that each provides both a scientifically useful capability and knowledge concerning scientific and computational performance to guide the design of the next model in the sequence.
"
%}



## Challenge

The main tasks in the project include collecting and refining large-scale scientific datasets; building models at 8 billion to 400 billion or more parameter scales using general texts, code, and specific scientific data, and evaluating their performance on the Aurora and Polaris supercomputers; refining the models for deployment and introducing post-processing techniques such as instruct tuning and reinforcement learning for aligned chat-based interfaces; and evaluating the effectiveness of the models on scientific tasks.


## Performance Results
The team’s software stack and frameworks have the capability to train LLMs efficiently at scale and on Polaris. The development team trained a model on 2 trillion tokens, for which, after  debugging and implementing certain code enhancements, they successfully reduced preprocessing time from approximately 1 hour to 2 minutes. Considerable effort has been put into making checkpoints convertible between the AuroraGPT software stack frameworks, particularly Megatron-DeepSpeed and Hugging Face.

{% include media-img.html
   source= "Chart_Connectome_.png"
%}

## Impact

AuroraGPT represents a transformative opportunity to leverage AI for scientific discovery, potentially redefining problem-solving across various domains critical to the DOE’s mission. AuroraGPT will enable Aurora users to both train LLMs from scratch and finetune existing models. One pretrained model—trained on 2 trillion tokens—is already complete, providing Aurora users with a framework for deploying off-the-shelf LLMs for science campaigns and helping accelerate the pace of research while expanding the technology’s accessibility. The work has the potential to improve significantly how science is conducted by fostering a deeper integration of AI capabilities into research workflows.


