const router = require('co-router')();
const controller = require('./resultHotels-controller');

router.get('/', controller.getHotels);

module.exports = router;
