const customers = require('../data/cheeses');

module.exports = (server) => { 
server.get('/customers', (req, res) => {
    res.send({ cheeses });
});
};