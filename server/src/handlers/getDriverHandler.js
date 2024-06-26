    const { getDriverById, getAllDrivers } = require('../controllers/driverController')

const driversHandler = async (req, res) => {
    try {
      const response = await getAllDrivers();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

const driverDetailHandler = async(req, res) => {
    const { id } = req.params;

    const source = isNaN(id) ? "bd" : "api";

    try {
        const response = await getDriverById(id, source);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = { driversHandler, 
    driverDetailHandler 
};  