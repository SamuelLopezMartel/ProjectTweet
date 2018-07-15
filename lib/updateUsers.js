const connect = require('./connectMongoose');

const update = (username, usernameAc, emailAc) => connect.findOne({username},(err, doc) => {
    if(usernameAc !==undefined && emailAc !== undefined){
        doc.username = usernameAc;
        doc.email = emailAc;
    }else if(username !== undefined){
        doc.username = usernameAc;
    }else {
        doc.email = emailAc;
    }
    
    doc.save();
});

module.exports = update;