const { Drivers, Teams } = require('../db');

const createDriverDb = async (id, Forename, Surname, Description, Image, Nationality, BirthDate, teams) => {

  const teamsArray = teams.split(',').map(teamName => teamName.trim());

  const newDriver = await Drivers.create({
    id,
    Forename,
    Surname,
    Description,
    Image,
    Nationality,
    BirthDate
  });

  // Encontrar o crear los equipos y asociarlos con el nuevo conductor
  const teamsPromises = teamsArray.map(async teamName => {
    const [team, created] = await Teams.findOrCreate({ where: { Name: teamName } });
    return team;
  });

  const teamsInstances = await Promise.all(teamsPromises);
  await newDriver.addTeams(teamsInstances);

  return {
    id: newDriver.id,
    Forename: newDriver.Forename,
    Surname: newDriver.Surname,
    Description: newDriver.Description,
    Image: newDriver.Image,
    Nationality: newDriver.Nationality,
    BirthDate: newDriver.BirthDate,
    Teams: teamsInstances.map(team => team.Name)
  };
};

module.exports = { createDriverDb };
