const { createDriverDb } = require("../controllers/driverController");

const createDriverHandler = async(req, res) => {
    
    const { FirstName, LastName, Description, Image, Nacionality, BirthDate } = req.body;
    try {
        const response = await createDriverDb(FirstName, 
            LastName, Description, Image, Nacionality, BirthDate)

        res.status(200).json(response)    
    } catch (error) {
        res.status(500).json({error: error.message})
    }    
}

module.exports = { createDriverHandler };
