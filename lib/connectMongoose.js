const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tweet');
module.exports = mongoose;