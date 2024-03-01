import Card from "../Card/card";
import "./cards.styles.css";

function Cards({allDrivers}) {

  const driversList = allDrivers;
  return (
    <div className="cards-list">
      {driversList?.map((driver) => (
        <Card key={driver.id} driver={driver} />
      ))}
    </div>
  );
};

export default Cards;