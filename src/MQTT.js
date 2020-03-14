var awsIot = require('aws-iot-device-sdk');

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts 
// to connect with a client identifier which is already in use, the existing 
// connection will be terminated.
//
var device = awsIot.device({
        keyPath: "certs/private.pem.key",
       certPath: "certs/certificate.pem.crt",
         caPath: "certs/gg-CA.crt", //"certs/AmazonRootCA1.pem",
       clientId: "Capstone_Jetson",
           host: "192.168.99.161", //"a33jti3e3cvwks-ats.iot.us-east-1.amazonaws.com"
           port: 9000,
           debug: true
     });

device
  .on('connect', function() {
    console.log('connect');
  });

device.on('error', function(err) { 
    console.log('error', err); 
}); 

module.exports = {device}
