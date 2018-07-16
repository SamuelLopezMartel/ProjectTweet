const showTweets = require('./../lib/tweets/showTweets');
const createTweets = require('./../lib/tweets/createTweets');

const index = (req, res) => showTweets(res);

const create = (req,res) => {
    const contentBody = req.body;
    createTweets(contentBody.owner,contentBody.tweet);
    res.send('esto funciona');
}


module.exports = {
    index,
    create
}