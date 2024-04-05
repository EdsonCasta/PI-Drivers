const router = require('express').Router();
const { createDriverHandler, deleteDriver } = require('../handlers/postDriverHandler');
const { arrayTeamsHandler } = require('../handlers/getTeamsHandler');
const { driversHandler, driverDetailHandler } = require('../handlers/getDriverHandler');
const { getDriverByName } = require('../controllers/driverController');

router.get('/drivers/name', getDriverByName);
router.get('/drivers', driversHandler);
router.get('/drivers/:id', driverDetailHandler);
router.post('/drivers', createDriverHandler);
router.get('/teams', arrayTeamsHandler);
router.delete('/drivers/:id', deleteDriver);

module.exports = router;