var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    name : {type: String},
    username : {type: String},
    password: {type: String}
});

module.exports = mongoose.model('User', userSchema);