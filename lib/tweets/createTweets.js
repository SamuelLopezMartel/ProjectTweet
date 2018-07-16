const connect = require('./schemaTweets');
const createNewTweet = (owner,tweet) => new connect ({owner,tweet}).save((err)=>err ? console.log(String(err)): console.log('todo ok'));
module.exports = createNewTweet;