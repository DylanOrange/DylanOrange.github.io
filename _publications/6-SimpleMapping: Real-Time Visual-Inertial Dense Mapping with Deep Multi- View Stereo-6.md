---
title: "SimpleMapping: Real-Time Visual-Inertial Dense Mapping with Deep Multi-
View Stereo"
collection: publications
permalink: /publication/SimpleMapping:Real-Time Visual-Inertial Dense Mapping with Deep Multi-
View Stereo
# excerpt: 'This paper is about the number 3. The number 4 is left for future work.'
# date: 2015-10-01
# venue: 'Journal 1'
paperurl: 'https://arxiv.org/abs/2306.08648'
citation: 'Xin, Y., Zuo, X., Lu, D., & Leutenegger, S. (2023). SimpleMapping: Real-Time Visual-Inertial Dense Mapping with Deep Multi-View Stereo. arXiv preprint arXiv:2306.08648.'
---

<!-- Ongoing -->

<center>
Yingye Xin, Xingxing Zuo, Dongyue Lu, Stefan Leutenegger <br /> 
Technical University of Munich 
</center>

<!-- <p align = "center">
<img src = ../files/overview.png alt = 'scene' height = 10% width = 80% />
<img src = ../files/result.png alt = 'scene' height = 10% width = 80% />
</p> -->

[![demo video](https://res.cloudinary.com/marcomontalbano/image/upload/v1691648995/video_to_markdown/images/youtube--R68sEMhEDNU-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://www.youtube.com/watch?v=R68sEMhEDNU "demo video")

<p align = "justify"> 
We present a real-time visual-inertial dense mapping method capable of performing incremental 3D mesh reconstruction with high quality using only sequential monocular images and inertial measurement unit (IMU) readings. 6-DoF camera poses are estimated by a robust feature-based visual-inertial odometry (VIO), which also generates noisy sparse 3D map points as a by-product. We propose a sparse point aided multi-view stereo neural network (SPA-MVSNet) that can effectively leverage the informative but noisy sparse points from the VIO system. The sparse depth from VIO is firstly completed by a single-view depth completion network. This dense depth map, although naturally limited in accuracy, is then used as a prior to guide our MVS network in the cost volume generation and regularization for accurate dense depth prediction. Predicted depth maps of keyframe images by the MVS network are incrementally fused into a global map using TSDF-Fusion. We extensively evaluate both the proposed SPA-MVSNet and the entire visual-inertial dense mapping system on several public datasets as well as our own dataset, demonstrating the system's impressive generalization capabilities and its ability to deliver high-quality 3D mesh reconstruction online. Our proposed dense mapping system achieves a 39.7% improvement in F-score over existing systems when evaluated on the challenging scenarios of the EuRoC dataset. 
</p>

<!-- [[Project report](http://dylanorange.github.io/files/mvs.pdf)]
[[code](https://github.com/DylanOrange/End-to-end-Learned-Multi-View-Stereo-Reconstruction-with-Transformers)] -->