const { Router } = require('express');
const { driversHandler,
  driverDetailHandler,
  firstDriversHandler
} = require('../handlers/getDriverHandler');

const driversRouter = Router();

driversRouter.get('/', driversHandler);
driversRouter.get('/:id', driverDetailHandler);
driversRouter.get('/?forename=', firstDriversHandler);

module.exports = driversRouter;