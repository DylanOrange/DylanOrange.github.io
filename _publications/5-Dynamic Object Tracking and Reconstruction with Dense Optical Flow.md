---
title: "Dynamic Object Tracking and Reconstruction with Dense Optical Flow"
collection: publications
permalink: /publication/Dynamic Object Tracking and Reconstruction with Dense Optical Flow
# excerpt: 'This paper is about the number 3. The number 4 is left for future work.'
# date: 2015-10-01
# venue: 'Journal 1'
# paperurl: 'http://academicpages.github.io/files/paper3.pdf'
# citation: 'Your Name, You. (2015). &quot;Paper Title Number 3.&quot; <i>Journal 1</i>. 1(3).'
---

Ongoing

<center>
Dongyue Lu <br /> 
Supervisor: Dr. Xingxing Zuo, Prof. Dr. Stefan Leutenegger <br /> 
Technical University of Munich 
</center>

<!-- <p align = "center">
<img src = ../files/overview.png alt = 'scene' height = 10% width = 80% />
<img src = ../files/result.png alt = 'scene' height = 10% width = 80% />
</p> -->

![thesis](../files/thesis.png)

<p align = "justify"> 
Most existing SLAM methods focus on static scenes. However, to better understand the scene, the pose and shape of dynamic objects are also critical.
This project focuses on the pose and shape estimation of the dynamic objects in a learned dense SLAM system.
A GRU update operator takes extracted correlation features and context features as input and updates optical flow iteratively.
After instance segmentation, the flow in the static region can be used to estimate the camera pose, and the dynamic region is used to estimate the dynamic object pose.
A differentiable dynamic dense bundle adjustment layer is constructed to jointly optimize camera pose and object pose and maximize their compatibility with current optical flow estimates.
Based on the already optimized object poses, object shapes are estimated through joint optimization using class-specific deep shape embeddings as priors.
</p>

<!-- [[Project report](http://dylanorange.github.io/files/mvs.pdf)]
[[code](https://github.com/DylanOrange/End-to-end-Learned-Multi-View-Stereo-Reconstruction-with-Transformers)] -->