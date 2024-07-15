const axios = require('axios');
const { Teams } = require('../db');

const getAllTeams = async () => {
    try {

        const count = await Teams.count();

        if (count === 0) {

            const teamsApi = (await axios.get('http://localhost:5000/drivers')).data;
            const teamsArray = teamsApi.map(team => team.teams).filter(team => typeof team === 'string');
            const uniqueTeams = new Set(teamsArray.flatMap(teamsString => teamsString.split(',').map(team => team.trim())));

            const teamsList = Array.from(uniqueTeams);

            for (const teamName of teamsList) {
                await Teams.findOrCreate({
                    where: { Name: teamName }
                });
            }

            console.log('Teams successfully saved to the database.');
            return teamsList;
        } else {
            console.log('Teams already exist in the database.');
        }
    } catch (error) {
        console.error('Error fetching and saving teams:', error);
    }
};

module.exports = { getAllTeams };
