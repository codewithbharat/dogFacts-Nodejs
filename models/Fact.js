const mongoose = require('mongoose');

const factSchema = new mongoose.Schema({
    fact: String
});

module.exports = mongoose.model('Fact', factSchema);