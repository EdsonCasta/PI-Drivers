const { Router } = require('express');
const { arrayTeamsHandler } = require('../handlers/getTeamsHandler')

const teamsRouter = Router();

teamsRouter.get('/', arrayTeamsHandler)

module.exports = teamsRouter;