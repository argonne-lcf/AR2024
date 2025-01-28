---
layout: page

title: ALCF Systems

theme: white
permalink: expertise-and-resources/systems
---
# Supercomputing Resources

ALCF supercomputing resources support large-scale, computationally intensive projects aimed at solving some of the world's most complex and challenging scientific problems.

<!-- | System Name     | Polaris       | Theta: KNL Nodes   | Theta: GPU Nodes   | Cooley   |
| :---------- | :---------- | :-------------- | :-------------- | :-------------- |
| Purpose    | Science Campaigns    | Science Campaigns       | Science Campaigns       |  Data Analysis and Visualization
| Architecture    | HPE Apollo 6500 Gen10+   | Intel-Cray XC40        | NVIDIA DGX A100        |  Intel Haswell
| Peak Performance    | 25 PF; 44 PF (Tensor Core double precision)    | 11.7 PF       | 3.9 PF        |  293 TF
| Processors per Node   | 3rd Gen AMD EPYC   | 64-core, 1.3-GHz Intel Xeon Phi 7230      | 2 AMD EPYC 7742        |  2 6-core, 2.4-GHz Intel E5–2620
| GPUs per Node    | 4 NVIDIA A100 Tensor Core   | --     | 8 NVIDIA A100 Tensor Core        |  NVIDIA Tesla K80
| Nodes   | 560    | 4,392      | 24        |  126
| Cores   | 17,920    | 281,088       | 3,072        |  1,512
| Memory    | 280 TB (DDR4); 87.5 TB (HBM)    | 843 TB (DDR4); 70 TB (HBM)       | 26 TB (DDR4); 8.32 TB (GPU)      |  47 TB (DDR4); 3 TB (GDDR5)
| Interconnect    | HPE Slingshot 10 with Dragonfly configuration    | Aries network with Dragonfly configuration      | NVIDIA QM8700 InfiniBand       |  FDR InfiniBand
| Racks    | 40    | 24       | 7     |  6 -->


| System Name | Purpose | Architecture | Peak Performance | Processors per Node | GPUs per Node | Nodes | Cores | Memory | Interconnect | Racks |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| **Polaris** | <span>Purpose</span> Science Campaigns | <span>Architecture</span> HPE Apollo 6500 Gen10+ | <span>Peak Performance</span> 25 PF; 44 PF (Tensor Core double precision) | <span>Processors per Node</span> 1 3rd Gen AMD EPYC | <span>GPUs per Node</span> 4 NVIDIA A100 Tensor Core | <span>Nodes</span> 560 | <span>Cores</span> 17,920 | <span>Memory</span> 280 TB (DDR4); 87.5 TB (HBM) | <span>Interconnect</span> HPE Slingshot 10 with Dragonfly configuration | <span>Racks</span> 40 |
| **Theta: KNL Nodes** | <span>Purpose</span> Science Campaigns | <span>Architecture</span> Intel-Cray XC40 | <span>Peak Performance</span> 11.7 PF | <span>Processors per Node</span> 1 64-core, 1.3-GHz Intel Xeon Phi 7230 | <span>GPUs per Node</span> – | <span>Nodes</span> 4,392 | <span>Cores</span> 281,088 | <span>Memory</span> 843 TB (DDR4); 70 TB (HBM) | <span>Interconnect</span> Aries network with Dragonfly configuration | <span>Racks</span> 24 |
| **Theta: GPU Nodes** | <span>Purpose</span> Science Campaigns | <span>Architecture</span> NVIDIA DGX A100 | <span>Peak Performance</span> 3.9 PF | <span>Processors per Node</span> 2 AMD EPYC 7742 | <span>GPUs per Node</span> 8 NVIDIA A100 Tensor Core | <span>Nodes</span> 24 | <span>Cores</span> 3,072 | <span>Memory</span> 26 TB (DDR4); 8.32 TB (GPU) | <span>Interconnect</span> NVIDIA QM8700 InfiniBand | <span>Racks</span> 7 |
| **Cooley** | <span>Purpose</span> Data Analysis and Visualization | <span>Architecture</span> Intel Haswell | <span>Peak Performance</span> 293 TF | <span>Processors per Node</span> 2 6-core, 2.4-GHz Intel E5–2620 | <span>GPUs per Node</span> 1 NVIDIA Tesla K80 | <span>Nodes</span> 126 | <span>Cores</span> 1,512 | <span>Memory</span> 47 TB (DDR4); 3 TB (GDDR5) | <span>Interconnect</span> FDR InfiniBand | <span>Racks</span> 6 |
{: .scroll-table }



# ALCF AI Testbed

The ALCF AI Testbed provides an infrastructure of next-generation AI-accelerator machines that allows researchers to evaluate the usability and performance of machine learning-based applications running on the systems. AI testbeds include:

| System Name | System Size | Compute Units per Accelerator | Estimated Performance of a Single Accelerator (TFlops) | Software Stack Support  | Interconnect |
| :-- | :-- | :-- | :-- | :-- | :-- |
| **Cerebras CS-2** | 2 Nodes (Each with a Wafer-Scale Engine) Including MemoryX and SwarmX | 850,000 Cores | > 5,780 (FP16) | Cerebras SDK, TensorFlow, PyTorch | Ethernet-based |
| **SambaNova Cardinal SN30** | 64 Accelerators (8 Nodes and 8 Accelerators per Node) | 1,280 Programmable Compute Units | >660 (BF16) | SambaFlow, PyTorch | Ethernet-based | 
| **GroqRack** | 72 Accelerators (9 Nodes and 8 Accelerators per Node) | 5,120 Vector ALUs | >188 (FP16) >750 (INT8) | GroqWare SDK, ONNX | RealScale |
| **Graphcore Bow Pod-64** | 64 Accelerators (4 Nodes and 16 Accelerators per Node) | 1,472 Independent Processing Units | >250 (FP16) | PopART, TensorFlow, PyTorch, ONNX | IPU Link |
| **Habana Gaudi** | 16 Accelerators (2 Nodes and 8 Accelerators per Node) | 8 TPC + GEMM Engine | >150 (FP16) | SynapseAI, TensorFlow, PyTorch | Ethernet-based |
{: .scroll-table }




# Data Storage Systems

ALCF disk storage systems provide intermediate-term storage for users to access, analyze, and share computational and experimental data. Tape storage is used to archive data from completed projects.

<!-- | System Name     | Eagle       | Grand   | Theta-FSO  | Swift   | Tape Storage
| :---------- | :---------- | :-------------- | :-------------- | :-------------- | :-------------- |
| File System    | Lustre   | Lustre       | Lustre       |  Lustre   |  -- 
| Storage System   | HPE ClusterStor E1000   | HPE ClusterStor E1000       | HPE Sonexion L300        |  All NVMe Flash Storage Array  | LT06 and LT08 Tape Technology
| Usable Capacity   | 100 PB   | 100 PB      | 9 PB      |  123 TB  | 300 PB
| Sustained Data Transfer Rate   | 650 GB/s   | 650 GB/s      | 240 GB/s       |  48 GB/s  | --
| Disk Drives   | 8,480   | 8,480       | 2,300       |  24  | -- -->


| System Name | File System | Storage System | Usable Capacity | Sustained Data Transfer Rate | Disk Drives |
| :-- | :-- | :-- | :-- | :-- | :-- |
| **Eagle** | <span>File System</span> Lustre | <span>Storage System</span> HPE ClusterStor E1000 | <span>Usable Capacity</span> 100 PB | <span>Sustained Data Transfer Rate</span> 650 GB/s | <span>Disk Drives</span> 8,480 |
| **Grand** | <span>File System</span> Lustre | <span>Storage System</span> HPE ClusterStor E1000 | <span>Usable Capacity</span> 100 PB | <span>Sustained Data Transfer Rate</span> 650 GB/s | <span>Disk Drives</span> 8,480 |
| **Theta-FSO** | <span>File System</span> Lustre | <span>Storage System</span> HPE Sonexion L300 | <span>Usable Capacity</span> 9 PB | <span>Sustained Data Transfer Rate</span> 240 GB/s | <span>Disk Drives</span> 2,300 |
| **Swift** | <span>File System</span> Lustre | <span>Storage System</span> All NVMe Flash Storage Array | <span>Usable Capacity</span> 123 TB | <span>Sustained Data Transfer Rate</span> 48 GB/s | <span>Disk Drives</span> 24 |
| **Tape Storage** | <span>File System</span> – | <span>Storage System</span> LT06 and LT08 Tape Technology | <span>Usable Capacity</span> 300 PB | <span>Sustained Data Transfer Rate</span> – | <span>Disk Drives</span> – |
{: .scroll-table }


# Networking

InfiniBand enables communication between system I/O nodes and the ALCF’s various storage systems. The Production HPC SAN is built upon NVIDIA Mellanox High Data Rate (HDR) InfiniBand hardware. Two 800-port core switches provide the backbone links between 80 edge switches, yielding 1600 total available host ports, each at 200 Gbps, in a non-blocking fat-tree topology. The full bisection bandwidth of this fabric is 320 Tbps. The HPC SAN is maintained by the NVIDIA Mellanox Unified Fabric Manager (UFM), providing Adaptive Routing to avoid congestion, as well as the NVIDIA Mellanox Self-Healing Interconnect Enhancement for InteLligent Datacenters (SHIELD) resiliency system for link fault detection and recovery.

When external communications are required, Ethernet is the interconnect of choice. Remote user access, systems maintenance and management, and high-performance data transfers are all enabled by the Local Area Network (LAN) and Wide Area Network (WAN) Ethernet infrastructure. This connectivity is built upon a combination of Extreme Networks SLX and MLXe routers and NVIDIA Mellanox Ethernet switches.

ALCF systems connect to other research institutions over multiple 100 Gbps Ethernet circuits that link to many high performance research networks, including local and regional networks like the Metropolitan Research and Education Network (MREN), as well as national and international networks like the Energy Sciences Network (ESnet) and Internet2.
 

 
# Joint Laboratory for System Evaluation
 
Through Argonne’s Joint Laboratory for System Evaluation (JLSE), the ALCF provides access to leading-edge testbeds for exploratory research aimed at evaluating future
extreme-scale computing systems, technologies, and capabilities. JLSE testbeds include:

- Florentia: Test and development system equipped with early versions of the Sapphire Rapids CPUs and Ponte Vecchio GPUs that will power Aurora
- Arcticus, DevEP, Iris: Intel discrete and integrated GPU testbeds to support the development, optimization, and scaling of applications and software for Aurora
- Aurora Software Development Kit: Frequently updated version of the publicly available Intel oneAPI toolkit for Aurora development
- Arm Ecosystem: Apollo 80 Fujitsu A64FX Arm system, NVIDIA Ampere Arm and A100 test kits, and an HPE Comanche with Marvell ARM64 CPU platform provide an ecosystem for porting applications and measuring performance on next-generation systems
- Presque: Intel DAOS nodes for testing the Aurora storage system
- Edge Testbed: NVIDIA Jetson Xavier and Jetson Nano platforms provide a resource for testing and developing edge computing applications
- NVIDIA and AMD GPUs: Clusters of NVIDIA V100, A100, and A40 GPUs, and AMD MI50 and MI100 GPUs for preparing applications for heterogeneous computing architectures
- NVIDIA Bluefield-2 DPU SmartNICs: Platform used for confidential computing, MPICH offloading, and APS data transfer acceleration
- NextSilicon Maverick: First-generation product being tested by Argonne researchers
- Atos Quantum Learning Machine: Platform for testing and developing quantum algorithms and applications
 



