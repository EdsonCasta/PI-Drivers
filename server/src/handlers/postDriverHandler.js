const { createDriverDb } = require("../controllers/createDriverController");
const { delDriver } = require("../controllers/driverController");

const createDriverHandler = async(req, res) => {
    
    const { ID, Forename, Surname, Description, Image, Nationality, BirthDate, Teams } = req.body;
    try {

        if( ![ Forename, Surname, Description, Image, Nationality, BirthDate, Teams ].every(Boolean) ) {
            return res.status(401).json({ message: 'Faltan datos' });
        };

        const response = await createDriverDb(ID, Forename, 
            Surname, Description, Image, Nationality, BirthDate, Teams)

        res.status(201).json(response)    
    } catch (error) {
        res.status(500).json({error: error.message})
    }    
};

const deleteDriver = async(req, res) => {
    try {
        const {id} = req.params;
        const rows = await delDriver(id);

        if(rows){
            res.status(200).send(`Conductor con id: ${id}, Eliminado`)
        } else {
            res.status(400).send(`Conductor con id: ${id}, No existe`)
        }
    } catch (error) {
        res.json(error.message)
    }
};

module.exports = { createDriverHandler, deleteDriver };
