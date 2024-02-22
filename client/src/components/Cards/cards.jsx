import Card from "../Card/card"

function Cards({ allDrivers }) {

  const driversList = allDrivers;

  return (
    <div>
    {driversList ?.map((driver) => (
      <Card driver={driver} />
    ))}
    </div>
  );
};

export default Cards;
