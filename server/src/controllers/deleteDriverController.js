const axios = require('axios');

const delDriverFromAPI = async (id) => {
    const response = await axios.delete(`http://localhost:5000/drivers/${id}`);
    return response.data;
};

module.exports = { delDriverFromAPI };
