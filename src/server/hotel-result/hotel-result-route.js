const router = require('co-router')();
const controller = require('./hotel-result-controller');

router.get('/', controller.getHotels);

module.exports = router;
