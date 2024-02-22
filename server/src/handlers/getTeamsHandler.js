const { getAllTeams } = require('../controllers/teamsControllers')

const arrayTeamsHandler = async(req, res) => {
    try {
        const teams = await getAllTeams();
        res.status(200).json(teams);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
}

module.exports = { arrayTeamsHandler };