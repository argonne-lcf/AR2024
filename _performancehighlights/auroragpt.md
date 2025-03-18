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
    blurb = "The structure of the human brain is enormously complex and not well understood. Its 80 billion neurons, each connected to as many as 10,000 other neurons, support activities from sustaining vital life processes to defining who we are. From high-resolution electron microscopy images of brain tissue, computer vision and machine learning techniques operating at the exascale can reveal the morphology and connectivity of neurons in brain tissue samples, informing future studies of the structure and function of mammalian brains."
%}



# Challenge

The main tasks in the project include collecting and refining large-scale scientific datasets; building models at 8 billion to 400 billion or more parameter scales using general texts, code, and specific scientific data, and evaluating their performance on the Aurora and Polaris supercomputers; refining the models for deployment and introducing post-processing techniques such as instruct tuning and Reinforcement Learning for aligned chat-based interfaces; and evaluating the effectiveness of the models on scientific tasks.


# Performance Results
The team’s software stack and frameworks have the capability to train LLMs efficiently at scale and on Polaris. The development team trained a model on 2 trillion tokens, for which, after  debugging and implementing certain code enhancements, they successfully reduced preprocessing time from approximately 1 hour to 2 minutes. Considerable effort has been put into making checkpoints convertible between the AuroraGPT software stack frameworks, particularly Megatron-DeepSpeed and Hugging Face.

{% include media-img.html
   source= "Chart_Connectome_.png"
%}

# Impact

AuroraGPT offers a transformative opportunity to leverage AI for scientific discovery, potentially redefining problem-solving across various domains critical to the DOE’s mission. AuroraGPT will enable Aurora users to both train LLMs from scratch and finetune existing models. A pretrained model—trained on 2 trillion tokens—is complete. The work has the potential to improve significantly how science is conducted by fostering a deeper integration of AI capabilities into research workflows.

