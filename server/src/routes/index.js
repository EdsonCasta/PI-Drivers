const router = require('express').Router();

const { driverByNameHandler } = require('../handlers/getDriverByNameHandler');
const { driversHandler } = require('../handlers/getDriverHandler');
const { driverDetailHandler } = require('../handlers/getDriverByIdHandler');
const { arrayTeamsHandler } = require('../handlers/getTeamsHandler');
const { paginationHandler } = require('../handlers/paginationHandler');
const { createDriverHandler } = require('../handlers/postDriverHandler');
const { deleteDriver } = require('../handlers/deleteDriverHandler');

router.get('/drivers/name', driverByNameHandler);
router.get('/drivers', driversHandler);
router.get('/drivers/:id', driverDetailHandler);
router.get('/teams', arrayTeamsHandler);
router.get('/pagination', paginationHandler);
router.post('/drivers', createDriverHandler);
router.delete('/drivers/:id', deleteDriver);

module.exports = router;