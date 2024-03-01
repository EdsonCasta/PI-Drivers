const { createDriverDb } = require("../controllers/driverController");

const createDriverHandler = async(req, res) => {
    
    const { Forename, Surname, Description, Image, Nationality, BirthDate } = req.body;
    try {
        const response = await createDriverDb(Forename, 
            Surname, Description, Image, Nationality, BirthDate)

        res.status(200).json(response)    
    } catch (error) {
        res.status(500).json({error: error.message})
    }    
}

module.exports = { createDriverHandler };
