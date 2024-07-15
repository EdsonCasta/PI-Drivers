    const { getAllDrivers } = require('../controllers/driverController')

const driversHandler = async (req, res) => {

    try {

      const response = await getAllDrivers();
      
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = { driversHandler };  