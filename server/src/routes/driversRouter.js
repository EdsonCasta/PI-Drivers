const { Router } = require('express');
const { driversHandler,
  driverDetailHandler,
  firstDriversHandler
} = require('../handlers/getDriverHandler');

const driversRouter = Router();

driversRouter.get('/', driversHandler);
driversRouter.get('/:idDriver', driverDetailHandler);
driversRouter.get('/name?="..."', firstDriversHandler);

module.exports = driversRouter;