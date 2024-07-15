const { delDriver } = require('../controllers/deleteDriverController');

const deleteDriver = async (req, res) => {

    const { id } = req.params;

    try {
        const response = await delDriver(id);
        
        res.status(200).json({ message: "Conductor eliminado con éxito", response });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { deleteDriver };
