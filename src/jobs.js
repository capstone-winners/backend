var jobsClient = awsIot.jobs({
    keyPath: "certs/private.pem.key",
   certPath: "certs/certificate.pem.crt",
     caPath: "certs/AmazonRootCA1.pem",
   clientId: "Capstone_Pi",
       host: "a33jti3e3cvwks-ats.iot.us-east-1.amazonaws.com"
 });


 jobsClient
  .on('connect', function() {
    console.log('connect');
    });

jobsClient
    .on('message', function(topic, payload) {
      console.log('message', topic, payload.toString());
    });