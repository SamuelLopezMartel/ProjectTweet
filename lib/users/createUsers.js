const connect = require('./schemaUsers');
const createNewUserDB = (username,email) => new connect ({username,email}).save((err)=>err ? console.log(String(err)): console.log('todo ok'));
module.exports =  {
    createNewUserDB
}