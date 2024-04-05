const axios = require('axios');
const { Teams } = require('../db');

const getAllTeams = async () => {
    const teamsDB = await Teams.findAll();

    if (teamsDB.length === 0) {

        const teamsApi = (await axios.get('http://localhost:5000/drivers')).data;

        const teamsData = teamsApi.map(drivers => drivers.teams);

        await Teams.bulkCreate(teamsData);

        return teamsData;
    }
    return teamsDB;
};

module.exports = { getAllTeams };