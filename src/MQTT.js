// in node v6.x
const AWS = require('aws-sdk')
const AWSMqttClient = require('aws-mqtt/lib/NodeClient')

AWS.config.region = 'us-east-1' 
AWS.config.credentials = "test" 

const client = new AWSMqttClient({
  region: AWS.config.region,
  credentials: AWS.config.credentials,
  endpoint: '...iot.us-east-1.amazonaws.com', // NOTE: get this value with `aws iot describe-endpoint`
  clientId: 'mqtt-client-' + (Math.floor((Math.random() * 100000) + 1)), // clientId to register with MQTT broker. Need to be unique per client
  will: {
    topic: 'WillMsg',
    payload: 'Connection Closed abnormally..!',
    qos: 0,
    retain: false
  } 
})

module.exports = {client}