---
title: "Dynamic Object SLAM with Dense Optical Flow"
collection: publications
permalink: /publication/Dynamic Object Tracking and Reconstruction with Dense Optical Flow
# excerpt: 'This paper is about the number 3. The number 4 is left for future work.'
# date: 2015-10-01
# venue: 'Journal 1'
# paperurl: 'http://academicpages.github.io/files/paper3.pdf'
# citation: 'Your Name, You. (2015). &quot;Paper Title Number 3.&quot; <i>Journal 1</i>. 1(3).'
---

2022.5-2023.5

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


<p style="text-align: center; font-size: 24px;"><strong>Abstract</strong></p>
<p align = "justify"> 
We present a novel method for dynamic SLAM that combines classical optimization
techniques with deep learning to achieve high accuracy and robustness in estimating camera
poses, dynamic object poses, and scene depth in dynamic scenes. The
proposed approach leverages a state-of-the-art optical flow estimator with a GRU update
operator and instance segmentation to differentiate the dynamic regions from the static
background and individually track the poses of dynamic objects. To optimize both camera
and object poses, a differentiable dynamic dense bundle adjustment layer is introduced,
allowing for joint global refinement of camera poses, dynamic object poses, and depth maps
using a wider range of information from the entire image. Extensive experiments on the Virtual KITTI dataset demonstrate the great performance
of the proposed approach, even in the presence of severe occlusions and limited constraints.
</p>
<!-- Most existing SLAM methods focus on static scenes. However, to better understand the scene, the pose and shape of dynamic objects are also critical.
This project focuses on the pose and shape estimation of dynamic objects in a learned SLAM system.
A GRU update operator takes the extracted correlation features and context features as input and updates the optical flow iteratively.
After instance segmentation, the flow of static regions can be used to estimate camera pose, and dynamic regions are used to estimate dynamic object pose.
A differentiable dynamic dense bundle adjustment layer is constructed to jointly optimize camera pose and object pose and maximize their compatibility with current optical flow estimation. -->

<p style="text-align: center; font-size: 24px;"><strong>Overview</strong></p>

![arch](../files/thesis_arch.png)

<p align = "justify"> 
The input images undergo a series of processing steps. First, they are passed through an iterative optical flow estimator to determine the correspondence between frames. Subsequently, the image is segmented using instance segmentation techniques. We then proceed to estimate the camera pose and dynamic object pose through a differentiable dynamic bundle adjustment layer, which is solved using a Gauss-Newton optimization approach. This layer produces depth and pose residuals to maximize the compatibility between the updated correspondence induced by depth and pose and the correspondence estimated by the network. The updated correspondence is then fed back into the optical flow estimator until the depth, pose, and flow converge.
</p>

<p style="text-align: center; font-size: 24px;"><strong>Experiment on Virtual KITTI dataset</strong></p>
The proposed method utilizes information from dynamic areas that have been overlooked in prior research, and it achieves enhanced accuracy in camera pose estimation in monocular setting.


![vkitti](../files/vkitti.png)

<p style="text-align: center; font-size: 24px;"><strong>Experiment on KITTI Tracking dataset</strong></p>
When comparing the results of several selected object samples from previous studies, it can be observed that the estimation of dynamic object poses is significantly improved relative to DynaSLAM II and CubeSLAM.

![kitti](../files/kitti.png)

[[Presentation](http://dylanorange.github.io/files/slides.pdf)]
[[code](https://github.com/DylanOrange/DROID-SLAM/tree/vkitti-allscene)]
<!-- [[Project report](http://dylanorange.github.io/files/mvs.pdf)]
[[code](https://github.com/DylanOrange/End-to-end-Learned-Multi-View-Stereo-Reconstruction-with-Transformers)] -->