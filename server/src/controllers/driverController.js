const axios = require('axios');
const { Driver } = require('../db')

const createDriverDb = async(FirstName, LastName, 
    Description, Image, Nacionality, BirthDate) => {
    return await Driver.create({ FirstName, LastName, 
        Description, Image, Nacionality, BirthDate })
};

const getDriverById = async(id, source) => {
    const driver = source === "API" ? (
        await axios .get(`http://localhost:5000/drivers/${id}`)
    ).data : await driver.findByPk(id);

    return driver;
};

module.exports = { createDriverDb, getDriverById };