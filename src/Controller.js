const service = require('./Service')

function setup(app) {
    app.get('/', (req, res) => res.send('Hello World!'))
    app.post('/action/:type/:id', (req, res) => {
        console.log(req.params.type + " " + req.params.id)
        console.log(req.body)
        res.send(service.handleAction(req.params.type, req.params.id, req.body))
    })
};

module.exports = setup