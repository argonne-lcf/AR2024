---
layout: highlight

theme: dark
permalink: 'features/aurora-performance-highlights/genai'

title: 'One Trillion Parameter LLM: AuroraGenAI'
pi: 'Rick Stevens, Argonne National Laboratory'

image: 'Stevens-LLM.png' 

---

{% include txt-intro.html 
    blurb = "Researchers from Argonne National Laboratory, Intel, and Hewlett Packard Enterprise are collaborating for the Aurora Generative AI (AuroraGenAI) project, which aims to create state-of-the-art foundational AI models for scientific applications across disciplines. Trained on a range of materials, including proprietary datasets of general and scientific texts, data, and codes, AuroraGenAI is a one-trillion-parameter GPT-3 large language model (LLM) whose deployment stands to accelerate research in wide range of fields, from biology and climatology to cosmology and materials chemistry."
%}



# Challenge

Enabled by unique GPU architecture and Aurora system capabilities, the models created through the AuroraGenAI project will be trained on scientific texts, code and science datasets at scales of more than one trillion parameters from diverse scientific domains. Models will be built and made available to researchers for such disparate fields of interest as molecular design, energy production, and power generation.

At the core of the AuroraGenAI project are Megatron, a highly optimized and efficient library for training large language models, and DeepSpeed, an open source deep learning optimization library for PyTorch.

AuroraGenAI is 5.7 times more powerful than GPT-4, which contains 175 million parameters.

# Performance Results
The one-trillion-parameter LLM run on Aurora using 64 nodes in parallel, half the number of nodes required to run the entire model on other GPU-based systems. Additionally, data parallel scaling of the trillion-parameter model was carried out on 256 Aurora nodes. The researchers subsequently began working toward scaling AuroraGenAI to more than 10,000 nodes on Aurora.

# Impact
The AuroraGenAI project has potential uses in systems biology, cancer research, climate science, cosmology, polymer chemistry, and materials science, among other fields, and stands to accelerate research and development across these different fields as a uniquely powerful resource for researchers.

