# 3dockers
_En example with 3 docker projects (php - node and react interacting between the three dockers)_

## Pre requisites:
_Install docker y register in dockerhub._
_Then login to your docker account._
_--------------------------------------------------_

_First create a new network called "mylocal1"_
```
docker network create mylocal1
```
_You can list all your networks_

```
docker network ls
```
_--------------------------------------------------_

_Then git clone!._
```
git clone https://github.com/developergit001/3dockers.git
```
```
cd 3dockers
```
_in the root of 3dockers:_
```
cd random_images_php
```
```
docker build -t phpback .
```
```
docker run -p 80:80 --net mylocal1 --name phpback -t phpback
```
```
cd ..
```
```
cd node_back_image_from_php
```
```
docker build -t nodeback .
```
```
docker run -p 3000:3000 --net mylocal1 --name nodeback -t nodeback
```
```
cd ..
```
```
cd react-image
```
```
docker build -t reactimage .
```
```
docker run -p 4000:3000 --net mylocal1 --name reactimage -t reactimage
```
_The run in your browser
http://localhost:4000_

_Thats it!_
