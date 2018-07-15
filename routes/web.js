const router = require('express').Router();
const controller = require('./user.controller')

router.get('/', controller.index);
router.get('/:id',controller.show);
router.post('/',controller.create);
router.put('/:name', controller.update);
router.delete('/:id',controller.destroy);

module.exports = router;
