var https = require('https');
var fs = require("fs");

var options = {
        host: 'a33jti3e3cvwks-ats.iot.us-east-1.amazonaws.com',
        port: 8443,
        path: '/greengrass/discover/thing/Capstone_Jetson',
        method: 'GET',
        key: fs.readFileSync("certs/private.pem.key"),
        cert: fs.readFileSync("certs/certificate.pem.crt"),
        ca: fs.readFileSync("certs/AmazonRootCA1.pem")
};

var req = https.request(options, function(res) {
        res.on('data', function(d) {
                var jsonObject = JSON.parse(d);
                console.log(JSON.stringify(jsonObject))
                console.log(jsonObject.GGGroups[0].CAs)
                fs.writeFile("certs/gg-CA.crt", jsonObject.GGGroups[0].CAs[0], (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
        });
});

req.end();

req.on('error',function(e) {
        console.error(e);
});