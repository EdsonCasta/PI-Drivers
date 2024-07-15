const axios = require('axios');
const { Drivers } = require('../db');
const { Op } = require('sequelize');

const getDriverByName = async (forename) => {
  const driversDB = await Drivers.findAll({
    where: { Forename: { [Op.iLike]: `%${forename}%` } },
    limit: 15
  });

  const driversApiResponse = await axios.get(`http://localhost:5000/drivers?forename=${forename}`);
  const driversApi = driversApiResponse.data.filter(driver => {
    return driver.name && driver.name.forename.toLowerCase().includes(forename.toLowerCase());
  }).slice(0, 15 - driversDB.length); 

  const driversFromApi = driversApi.map(driver => ({
    id: driver.id,
    Forename: driver.name.forename,
    Surname: driver.name.surname,
    Description: driver.description,
    Image: driver.image?.url || 'https://static.displate.com/857x1200/displate/2023-11-03/1054e299bcc7724411f6e6a14a0b7752_228283cdec3d85bfe6c8493e24101b8d.jpg',
    Nationality: driver.nationality,
    BirthDate: driver.dob,
    Teams: driver.teams
  }));

  const allDrivers = [...driversDB, ...driversFromApi];

  if (allDrivers.length === 0) {
    throw new Error('No se encontraron conductores que coincidan con la búsqueda.');
  }

  return allDrivers;
};

module.exports = { getDriverByName };
