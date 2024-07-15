const axios = require('axios');
const { Drivers, Teams } = require('../db');

const getDriverById = async (id) => {

    let driver;
  
    if (!id) {
      throw new Error('ID no válido');
    }
  
    if (isNaN(id)) {
      driver = (await Drivers.findByPk(id, {
        include: {
          model: Teams,
          attributes: ['Name']
        }
      }));
  
      if (driver) {
        return driver;
      }
    }
  
    const driverFromApi = (await axios.get(`http://localhost:5000/drivers/${id}`)).data;
  
    return driverFromApi;
  };

module.exports = { getDriverById };

  