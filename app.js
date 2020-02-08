const express = require('express')
const app = express()
const port = 3000

require('./src/Controller')(app)

app.listen(port, () => console.log(`App listening on port ${port}!`))