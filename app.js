const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));


require('./src/Controller')(app)

app.listen(port, () => console.log(`App listening on port ${port}!`))