const { getDriverByName } = require('../controllers/driverByNameController');

const driverByNameHandler = async (req, res) => {

    const { forename } = req.query;
    
    try {

      const response = await getDriverByName(forename);
      
      res.status(200).json(response);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = { driverByNameHandler };  
