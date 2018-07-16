const connect = require('./schemaUsers');
const users = (resp) => connect.find( {}, ( req,res ) => resp.json(res))
module.exports = users;