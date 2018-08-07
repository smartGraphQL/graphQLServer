const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let recordSchema = new Schema({
	name: {type: String, required: true}, 
	artist: {type: String, required: true},
	album: {type: String, required: true},
})

module.exports = mongoose.model('record', recordSchema);