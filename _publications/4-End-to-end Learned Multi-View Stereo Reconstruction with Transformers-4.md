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


---
<p style="text-align: center; font-size: 24px;"><strong>Abstract</strong></p>
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

---
<p style="text-align: center; font-size: 24px;"><strong>Overview</strong></p>

![overview](../files/overview.png)
<p align = "justify"> 
Given a set of RGB images with corresponding camera intrinsic parameters and extrinsic poses, our objective is real-time scene geometry reconstruction by predicting a global TSDF volume as the scene representation. We initiate the process by sampling incoming RGB frames, ensuring sufficient rotation and translation between frames. Keyframes within a window are selected, and a cube is constructed to encapsulate their view frustums within a specified depth range. Utilizing the Swin-Transformer for multi-level feature extraction, we incorporate an attention mechanism for information exchange. Extracted features are back-projected into a volume using camera parameters. Subsequently, we predict the TSDF and occupancy probability in each voxel in a coarse-to-fine manner, refining spatial features with sparse 3D convolution. The global feature volume is incrementally built at each level using a transformer module, fusing local and global features to avoid equal-weight treatment of individual frames. The network is supervised using occupancy loss and TSDF loss.
</p>

---
<p style="text-align: center; font-size: 24px;"><strong>Result</strong></p>

<p style="font-size: 18px;"><strong>Experiments on ScanNet Dataset</strong></p>

![overall](../files/overall.png)

Our method exhibits comparable reconstruction performance to NeuralRecon and surpasses it in certain scenes. Atlas, as an offline method, tends to generate oversmoothed reconstructions, leading to inaccuracies. In terms of speed, both our method and NeuralRecon can operate at an interactive rate, offering significantly faster performance than Atlas.

<p style="font-size: 18px;"><strong>Ablation studies</strong></p>

<div style="text-align:center">
<img src="../files/ablations.png" alt="ablation" width="80%" height="80%" align="center"><br>
</div>

In the ablation studies, we explore two settings: completely removing the fusion module and employing a simple linear layer as the fusion module. Both settings result in inferior performance compared to our transformer module. The outcomes underscores the transformer module's capability to consider surrounding conditions and context.

<div style="text-align:center">
<img src="../files/table.png" alt="table" width="50%" height="50%"><br>
</div>

---

[[Project report](http://dylanorange.github.io/files/mvs.pdf)]
[[code](https://github.com/DylanOrange/End-to-end-Learned-Multi-View-Stereo-Reconstruction-with-Transformers)]