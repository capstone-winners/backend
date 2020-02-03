const express = require('express')
const app = express()
const port = 3000
const mqtt = require('./src/MQTT')

app.get('/', (req, res) => res.send('Hello World!'))

mqtt.device.publish('topic_1', JSON.stringify({ test_data: 1}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))