# 3dockers
En example with 3 docker projects (php - node and react interacting between the three dockers)

Pre requisites:
Install docker y register in dockerhub.
Then login to your docker account.
--------------------------------------------------

First create a new network called "mylocal1"

docker network create mylocal1

You can list all your networks

docker network ls
--------------------------------------------------

Then git clone!.

git clone https://github.com/developergit001/3dockers.git

cd 3dockers

in the root of 3dockers:

cd random_images_php
docker build -t phpback .
docker run -p 80:80 --net mylocal1 --name phpback -t phpback
cd ..

cd node_back_image_from_php
docker build -t nodeback .
docker run -p 3000:3000 --net mylocal1 --name nodeback -t nodeback
cd ..

cd react-image
docker build -t reactimage .
docker run -p 4000:3000 --net mylocal1 --name reactimage -t reactimage

The run in your browser
http://localhost:4000

Thats it!
