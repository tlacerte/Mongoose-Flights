const Flight = require('../models/flight');

module.exports = {
    create,
    addArrivalInfo
};

function create(req, res){
    Flight.findById(req.params.id, function(err, flight){
        flight.details.push(req.body);
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

function addArrivalInfo(req, res){
    var arrivalInfo = new Flight(req.body);
    arrivalInfo.save(function(err){
        if (err) return res.render(`/flights/${flight._id}`);
        res.redirect(`/flights/${flight._id}`);    
    });
}