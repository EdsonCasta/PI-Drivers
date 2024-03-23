const axios = require('axios');
const { Teams } = require('../db')

const saveTeams = async () => {
  try {
     
    const teamsInDB = await Teams.findAll();

    if (teamsInDB.length === 0) {
        // Si la base de datos está vacía, obtén los equipos de la API
        const teamsFromAPI = await axios.get("http://localhost:3001/teams");
        console.log(teamsFromAPI);

        // Guarda los equipos en la base de datos
        await Teams.bulkCreate(teamsFromAPI.data);
    }
    console.log('Datos guardados exitosamente');
  } catch (error) {
    console.log('Error al guardar los datos', error)
  }
};

module.exports = saveTeams;

