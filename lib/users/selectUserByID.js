const connect = require('./schemaUsers');
const por = (name, resp) =>connect.find({username:name}, (req , res) => String(res)!=='' ? resp.json(res) : resp.send('Usuario no exite'));
module.exports = por;
