# Capstone Winners Back End

## Docker

The Docker image is based on [this](https://github.com/phusion/passenger-docker)
but with the latest LTS version of node (v12).

#### Helpful Docker Commands

Run these commands while in the root of this repository.

Build the docker image: `docker build -t backend .`

Start a long-running Docker container: `docker run backend`
You may close the terminal window after Docker starts up and the container
will remain running.

Open a bash session inside the container: 

`docker exec -t -i <your-conatiner-id> bash -l`

For more information check out [this](https://github.com/phusion/passenger-docker#container_administration) 
and if that doesn't have enough information then try [this](https://github.com/phusion/baseimage-docker#container_administration)

