---
layout: highlight

theme: white
permalink: 'science/highlights/ozik'

title: 'Probabilistic Comparative Modeling of Colorectal Cancer Screening Strategies'
pi: 'Jonathan Ozik, Argonne National Laboratory'
award: 'ALCC'
systems: 'Theta'
field: 'Biological Sciences'
sdl: 's'

image: 'Ozik.png' 
image-caption: 'Screening benefits lost due to disruptions by cohort and scenario for two microsimulation models and for unscreened (U60), colonoscopy screening-adherent (C60), and fecal immunochemical test screening-adherent (F60) 60-year-olds.'
image-credit: 'Pedro Nascimento de Lima, RAND Corporation'

publications:
  - authors: 'Nascimento de Lima, P., R. van den Puttelaar, A.I. Hahn, M. Harlass, N. Collier, J. Ozik, A.G. Zauber, I. Lansdorp-Vogelaar, and C.M. Rutter'
    title: 'Projected long-term effects of colorectal cancer screening disruptions following the COVID-19 pandemic'
    source: 'eLife'
    date: 'May 2023'
    publisher: 'eLife Sciences Publications, Ltd.'
    url: 'https://doi.org/10.7554/eLife.85264'
    
    
---

{% include txt-intro.html 
    blurb = "The COVID-19 pandemic has had far-reaching health repercussions worldwide. One notable impact has been a sharp decline in cancer screening rates, including for colorectal cancer (CRC), which remains the second-leading cause of cancer deaths in the United States. To investigate the effects of these screening disruptions, a multi-institutional team of researchers leveraged ALCF supercomputers to run CRC models to estimate their impact on long-term cancer outcomes."
%}



# Challenge

Despite cancer screening reopening efforts, CRC screening has not yet returned to pre-pandemic levels. The pandemic continues to affect CRC screening and diagnosis through staff shortages that reduce capacity at gastroenterology clinics and patient hesitancy to seek care. The pandemic may also further exacerbate existing disparities related to screening. The burden of unemployment and loss of access to healthcare varies across different racial and ethnic groups, which could contribute to widening disparities in cancer outcomes.

# Approach

With help from ALCF computing resources, a team of researchers from Argonne National Laboratory, RAND Corporation, Erasmus Medical Center, Fred Hutchinson Cancer Center, and Memorial Sloan Kettering Cancer Center used two independently developed microsimulations CRC models — CRC-SPIN and MISCAN-Colon — to estimate the effects of pandemic-induced disruptions in colonoscopy screening for eight pre-pandemic average-CRC risk population cohorts. The team leveraged the ALCF’s Theta supercomputer to calibrate the CRC-SPIN model using the Incremental Mixture Approximate Bayesian Computation (IMABC) method. Each Theta node could run 64 concurrent CRC-SPIN models, with jobs consisting of large, space-filling parameter samples and longer iterative parameter space sampling. The researchers evaluated three channels through which screening was disrupted: delays in screening, regimen switching, and screening discontinuation. The impact of these disruptions on long-term CRC outcomes was measured by the number of life-years lost due to CRC screening disruptions compared to a scenario without any disruptions.

# Results

The team examined a total of 25 scenarios based on different population cohorts (e.g., 50-, 60-, and 70-year-olds who did or did not adhere to screening) that post-pandemic experienced no disruptions, some delays, or discontinued screening. While short-term delays in screening of 3-18 months are predicted to result in minor decreases in life expectancy, discontinuing screening resulted in much more significant decreases. The team’s findings demonstrate that unequal recovery of screening following the pandemic can further widen disparities. The worst-case scenario considered was that of 50-year-olds who postponed screening until the age of 65 when they became Medicare eligible, whereas other disruption scenarios for this group are predicted to have minor effects.



# Impact

The team’s research highlights the potential harm caused by disruptions in cancer screening due to the COVID-19 pandemic. By analyzing different age groups and screening statuses, their study underscores how discontinuing screening could reduce life expectancy, emphasizing the importance of ensuring equitable recovery to screening to prevent further disparities.
