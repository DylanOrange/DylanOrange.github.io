---
title: "End-to-end Learned Multi-View Stereo Reconstruction with Transformers"
collection: publications
permalink: /publication/End-to-end Learned Multi-View Stereo Reconstruction with Transformers
# excerpt: 'This paper is about the number 3. The number 4 is left for future work.'
# date: 2015-10-01
# venue: 'Journal 1'
# paperurl: 'http://academicpages.github.io/files/paper3.pdf'
# citation: 'Your Name, You. (2015). &quot;Paper Title Number 3.&quot; <i>Journal 1</i>. 1(3).'
---

2021.10-2022.3

<center>
<b>Dongyue Lu</b>, Zhisheng Zheng <br /> 
Supervisor: Prof. Dr. Matthias Nießner <br /> 
Technical University of Munich 
</center>

<!-- <p align = "center">
<img src = ../files/overview.png alt = 'scene' height = 10% width = 80% />
<img src = ../files/result.png alt = 'scene' height = 10% width = 80% />
</p> -->

![mvs](../files/mvs.png)

<p align = "justify"> 
Multi-view stereopsis is a significant topic in computer
vision. From an input monocular RGB video and camera
parameters, we reconstruct the surface geometry directly
by regressing a sparse TSDF volume. A Swin-Transformer
backbone is used to extract the most informative features
for downstream fusion tasks. Features of keyframes are
back-projected to 3D space, constructing a local window
for representing the local geometry. TSDF values are regressed using sparse convolution in a coarse-to-fine manner to ignore free space and increase computational efficiency. A transformer-based fusion module makes the local
reconstruction to be globally consistent with the previously
reconstructed windows. Our method is able to learn the local smoothness and global shape prior of 3D surfaces at
interactive rates. Experiments on ScanNet show that the reconstruction quality and efficiency of our method are comparable to current state-of-the-art methods.
</p>

[[Project report](http://dylanorange.github.io/files/mvs.pdf)]
[[code](https://github.com/DylanOrange/End-to-end-Learned-Multi-View-Stereo-Reconstruction-with-Transformers)]