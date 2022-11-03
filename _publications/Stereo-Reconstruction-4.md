---
title: "Stereo Reconstruction"
collection: publications
permalink: /publication/Stereo-Reconstruction
# excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
# date: 2009-10-01
# venue: 'Journal 1'
# paperurl: 'http://dylanorange.github.io/dongyuelu.github.io/files/Shape-Completion-with-Meso-Skeleton-Learning.pdf'
# citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---


<center>
caixukun, Dekai Zhu, <b>Dongyue Lu</b>, Qianyi Yang, Weihua Huang

Technical University of Munich 
</center>

<p align = "center">
<img src = ../files/3doverview.png alt = 'scene' height = 10% width = 70% />
<!-- </p>

<p align = "center"> -->
<img src = ../files/disparity.png alt = 'scene' height = 10% width = 70% />
</p>


<p align = "justify"> 
In this project, we apply different stereo matching methods to reconstruct 3D scenes and compare their performance. Based on key-point detectors and eight-point algorithm, we recover the camera's extrinsic and rectify the images from left and right camera for the next step. Then we apply three dense matching methods to generate the disparity map respectively and further reconstruct the 3D scene. We evaluate the impact of different detectors and bundle adjustment on the accuracy of the estimated transformation. The experiment shows that SIFT performs better than ORB, and the accuracy of the estimated transform is also improved after using bundle adjustment. For dense matching, with PSMNet, which is the SOTA in disparity prediction, we can get much higher precision than classic methods block matching and semi-global matching.
</p>

[[Project report](http://dylanorange.github.io/dongyuelu.github.io/files/3d.pdf)]
[[code](https://github.com/DylanOrange/Stereo-Reconstruction)]
<!-- [[poster](http://dylanorange.github.io/dongyuelu.github.io/files/shape.png)] -->