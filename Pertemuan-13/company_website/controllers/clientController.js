let Client = require('../models/client.js');

exports.list_all_client = function(req, res, next){
    res.render('client');
};
