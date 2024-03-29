const axios = require('axios');
const { Driver } = require('../db');


const getAllDrivers = async () => {
    try {
      const infoBD = await Driver.findAll();
      const infoApi = await axios.get(`http://localhost:5000/drivers`);
      return [...infoApi.data, ...infoBD];
    } catch (error) {
      console.log(error.message);
    }
  };


const createDriverDb = async(id, Forename, Surname, 
    Description, Image, Nationality, BirthDate) => {
    return await Driver.create({ id, Forename, Surname, 
        Description, Image, Nationality, BirthDate })
};


const getDriverById = async(id, source) => {
    const driver = source === "api" ? (
        await axios.get(`http://localhost:5000/drivers/${id}`)
    ).data : await Driver.findByPk(id);
    
    return driver;
};


const getDriverByName = async (forename) => {
    
    const driversDB = await Driver.findAll({where: {Forename: forename}});

    const driversApi = await axios.get(`http://localhost:5000/drivers?forename=${forename}`);

    const driversFiltered = driversApi.data.filter(driver => {
      return driver.name && driver.name.forename.toLowerCase() === forename.toLowerCase();
    })

    return [...driversDB, ...driversFiltered];
};

const delDriver = async (id) => {

  const borrar = await Driver.destroy({ where: { id }});
  
  return borrar;
};

module.exports = { delDriver, createDriverDb, getDriverById, getAllDrivers, getDriverByName };