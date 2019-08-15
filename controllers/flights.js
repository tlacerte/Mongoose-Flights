const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    index,
    create
}

function newFlight(req, res){
    res.render('flights/new');
}

function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', { flights }); 
    });
}

function create(req, res){
    var flight = new Flight(req.body);
    flight.save(function(err){
        if (err) return res.render('flights/new');
        res.redirect('flights');    
    });
}