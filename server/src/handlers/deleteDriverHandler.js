const { delDriverFromAPI } = require('../controllers/deleteDriverController');

const deleteDriver = async (req, res) => {
    const { id } = req.params;

    try {
        // Intentar eliminar el conductor de la API externa
        const response = await delDriverFromAPI(id);
        return res.status(200).json({ message: "Conductor eliminado de la API externa con éxito", apiResponse: response });
    } catch (apiError) {
        console.error('Error al eliminar de la API externa:', apiError);
        return res.status(500).json({ error: 'Error al eliminar el conductor de la API externa' });
    }
};

module.exports = { deleteDriver };
