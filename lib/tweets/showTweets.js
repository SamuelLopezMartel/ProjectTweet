const connect = require('./schemaTweets');
const tweet = (resp) => connect.find( {}, ( req,res ) => resp.json(res));
module.exports = tweet;