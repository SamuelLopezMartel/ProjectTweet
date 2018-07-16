const router = require('express').Router();
const controllerUser = require('./user.controller')
const controllerTweet = require('./tweet.controller');

router.get('/user', controllerUser.index);
router.get('/user/:id',controllerUser.show);
router.post('/user',controllerUser.create);
router.put('/user/:name', controllerUser.update);
router.delete('/user/:id',controllerUser.destroy);

/*RUTAS TWEET*/
router.get('/tweet', controllerTweet.index);
router.post('/tweet', controllerTweet.create);

module.exports = router;
