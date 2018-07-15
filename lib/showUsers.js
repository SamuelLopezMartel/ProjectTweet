const connect = require('./connectMongoose');
const users = (resp) => connect.find( {}, ( req,res ) => resp.json(res))
module.exports = users;