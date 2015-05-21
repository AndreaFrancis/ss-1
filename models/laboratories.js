var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var laboratorySchema = new Schema({
    name : {type: String}
});

module.exports = mongoose.model('Laboratory', laboratorySchema);