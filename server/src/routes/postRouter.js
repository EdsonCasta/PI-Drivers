const { Router } = require('express');
const { createDriverHandler } = require('../handlers/postDriverHandler'); 

const postRouter = Router();

postRouter.post('/', createDriverHandler);

module.exports = postRouter;