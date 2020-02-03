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

### MQTT
Get the proper credentials from slack and upload them to a folder named certs. Mqtt will use these creds to publish/subscribe to messages. This does not require IAM authentication when using certs, this is taken care of with signing inside of the sdk.

#### Topics
There is no concept of creating new topics in MQTT. It appears that you are free to publish or subscribe to anything. In this app, a sample device is connected then publishes and reads from a topic. Messages can also be sent from postman

### Postman
In order to make a successful Postman request, we needed to:
1. Setup an IAM user with permission to read/config IOT
2. Set auth (authentication tab) in postman with access and secret key
3. In auth, go to advanced —> set service name to be “iotdata”
4. Cert config is not necessary
