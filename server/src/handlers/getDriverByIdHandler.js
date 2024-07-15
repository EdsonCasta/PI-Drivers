const { getDriverById } = require('../controllers/driverByIdController')

const driverDetailHandler = async (req, res) => {

  const { id } = req.params;

  try {
    const response = await getDriverById(id);

    res.status(200).json(response);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { driverDetailHandler };  