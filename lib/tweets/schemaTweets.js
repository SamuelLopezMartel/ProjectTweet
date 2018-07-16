const mongoose = require('./../connectMongoose');
const tweetSchema = mongoose.Schema({
    owner: {
        type: String,
        require: [true, 'El usuario es obligatorio']
        //unique: [true , 'Este nombre de usuario ya esta siendo usado']
    },
    tweet: {
        type: String,
        // require: [true, 'El email es obligatorio'],
        // unique: [true, 'Este email ya esta siendo usado'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Escribe un email valido"]
    }
});

const USER = mongoose.model('tweet', tweetSchema);

module.exports = USER;