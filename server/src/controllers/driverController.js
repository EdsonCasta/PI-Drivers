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


const createDriverDb = async(FirstName, LastName, 
    Description, Image, Nacionality, BirthDate) => {
    return await Driver.create({ FirstName, LastName, 
        Description, Image, Nacionality, BirthDate })
};


const getDriverById = async(id, source) => {
    const driver = source === "api" ? (
        await axios.get(`http://localhost:5000/drivers/${id}`)
    ).data : await Driver.findByPk(id);
    
    return driver;
};


const getDriverByName = async (forename) => {
    
    const driversDB = await Driver.findAll({where: {FirstName: forename}});

    const driversApi = await axios.get(`http://localhost:5000/drivers?forename=${forename}`);

    const driversFiltered = driversApi.data.filter(drivers => drivers.name.forename === forename)

    return [...driversDB, ...driversFiltered];
};    

module.exports = { createDriverDb, getDriverById, getAllDrivers, getDriverByName };