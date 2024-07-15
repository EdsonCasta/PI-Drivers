const axios = require('axios');
const { Drivers, Teams } = require('../db');

const getAllDrivers = async () => {
  try {
    const infoBD = await Drivers.findAll({
      include: {
        model: Teams,
        attributes: ['Name']
      }
    });
    const infoApi = await axios.get(`http://localhost:5000/drivers`);
    const allDrivers = [...infoApi.data, ...infoBD];

    const driversWithDefaultImage = allDrivers.map(driver => ({
      id: driver.id,
      Forename: driver.Forename || driver.name?.forename,
      Surname: driver.Surname || driver.name?.surname,
      Description: driver.Description || driver.description,
      Image: driver.Image || driver.image?.url || 'https://static.displate.com/857x1200/displate/2023-11-03/1054e299bcc7724411f6e6a14a0b7752_228283cdec3d85bfe6c8493e24101b8d.jpg',
      Nationality: driver.Nationality || driver.nationality,
      BirthDate: driver.BirthDate || driver.dob,
      Teams: driver.Teams ? driver.Teams.map(team => team.Name).join(', ') : driver.teams
    }));

    return driversWithDefaultImage;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports = { getAllDrivers };