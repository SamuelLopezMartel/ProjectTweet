const connect = require('./schemaUsers');
const removeUser = (username) => connect.findOne({username}, (err, doc) =>
doc !== null ? doc.remove() : console.log('Usuario no exite'))
module.exports = removeUser;