const { getDriverById } = require('../controllers/driverController')

// const URL = "http://localhost:5000/drivers"

const driversHandler = async(req, res) => {
    try {
        const response = await axios.get("http://localhost:5000/drivers");
console.log(response);
        if(response.data && Array.isArray(response.data)) {
            res.status(200).json(response)
        }
    } catch (error) {
        res.status(500).send("Error de la solicitud a la api")  
    }
}

const driverDetailHandler = async(req, res) => {
    const { id } = req.params;

    const source = isNaN(id) ? "DB" : "API";

    try {
        const response = await getDriverById(id, source);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
  
const firstDriversHandler = (req, res) => {
    res.status(200).send("llegue")  
}  

module.exports = { driversHandler, 
    driverDetailHandler,
    firstDriversHandler 
};  