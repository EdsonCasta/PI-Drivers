const router = require('express').Router();
const { createDriverHandler } = require('../handlers/postDriverHandler');
const { arrayTeamsHandler } = require('../handlers/getTeamsHandler');
const { driversHandler,
  driverDetailHandler
} = require('../handlers/getDriverHandler');

router.get('/drivers', driversHandler);
router.get('/drivers/:id', driverDetailHandler);
router.post('/drivers', createDriverHandler);
router.get('/teams', arrayTeamsHandler)

module.exports = router;