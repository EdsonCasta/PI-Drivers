const { getPaginatedDrivers } = require('../controllers/paginationController');

const paginationHandler = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 9;
    const offset = (page - 1) * pageSize;

    // Llamada a la función de paginación para obtener los conductores paginados
    const drivers = await getPaginatedDrivers({ offset, pageSize });
    res.status(200).json(drivers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { paginationHandler };
