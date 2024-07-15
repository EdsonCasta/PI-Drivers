const { Drivers } = require('../db');

const delDriver = async (id) => {

    const driver = await Drivers.findByPk(id);

    if (!driver) {
        throw new Error('Conductor no encontrado');
    }

    await driver.destroy();
    
    return driver;
};

module.exports = { delDriver };
