const axios = require('axios');

const getPaginatedDrivers = async ({ offset, pageSize }) => {

    const response = await axios.get('http://localhost:5000/drivers', {
      params: {
        offset,
        limit: pageSize,
      },
    });
    const drivers = response.data;
    console.log(drivers);

    return drivers;
};

module.exports = { getPaginatedDrivers };
