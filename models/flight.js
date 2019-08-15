var mongoose = require('mongoose');
 // optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: deleteOneYear()
    },
});

function deleteOneYear(){
    
}

module.exports = mongoose.model('Flight', flightSchema)