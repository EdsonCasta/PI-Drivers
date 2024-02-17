const { Router } = require("express");
const driversRouter = require("./driversRouter");
const teamsRouter = require("./teamsRouter");
const postRouter = require("./postRouter");

const router = Router();

router.use("/drivers", driversRouter)
router.use('/teams', teamsRouter)
router.use('/drivers', postRouter)

module.exports = router;
