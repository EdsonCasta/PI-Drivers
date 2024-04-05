const axios = require('axios');
const { Driver } = require('../db');
const { Op } = require('sequelize');

const getAllDrivers = async () => {
  try {
    const infoBD = await Driver.findAll();
    const infoApi = await axios.get(`http://localhost:5000/drivers`);
    const allDrivers = [...infoApi.data, ...infoBD];
    const driversWithDefaultImage = allDrivers.map(driver => ({
      ...driver,
      image: (driver.image.url !== '') ? driver.image.url : 'https://static.displate.com/857x1200/displate/2023-11-03/1054e299bcc7724411f6e6a14a0b7752_228283cdec3d85bfe6c8493e24101b8d.jpg'
    }));
    return driversWithDefaultImage;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const createDriverDb = async (id, Forename, Surname,
  Description, Image, Nationality, BirthDate) => {
  return await Driver.create({
    id, Forename, Surname,
    Description, Image, Nationality, BirthDate
  })
};

const getDriverById = async (id, source) => {
  let drivers;

  if (source === "api") {
    drivers = (await axios.get(`http://localhost:5000/drivers/${id}`)).data;
  } else {
    drivers = await Driver.findByPk(id);
  }

  for (let key in drivers) {
    if (drivers.hasOwnProperty(key) && key === 'image') {
      if (drivers[key].url === '') {
        drivers[key].url = 'https://static.displate.com/857x1200/displate/2023-11-03/1054e299bcc7724411f6e6a14a0b7752_228283cdec3d85bfe6c8493e24101b8d.jpg';
      };
    };
  };
  return drivers;
};

const getDriverByName = async (req, res) => {
  const { forename } = req.query;
  try {
    const driversDB = await Driver.findAll({ where: { Forename: { [Op.iLike]: `%${forename}%` } } });

    const driversApi = await axios.get(`http://localhost:5000/drivers?forename=${forename}`);

    const driversFiltered = driversApi.data.filter(driver => {
      return driver.name && driver.name.forename.toLowerCase() === forename.toLowerCase();
    })

    const detailDriver = [...driversDB, ...driversFiltered];

    if (detailDriver.length === 0) {
      res.status(404).json({ error: 'No se encontro ningun resultado' })
      return;
    };

    res.status(200).json(detailDriver);


  } catch (error) {
    console.error('Error al buscar conductor:', error);
    return { error: 'Error interno del servidor' };
  }

};

const delDriver = async (id) => {

  const borrar = await Driver.destroy({ where: { id } });

  return borrar;
};

module.exports = { delDriver, createDriverDb, getDriverById, getAllDrivers, getDriverByName };