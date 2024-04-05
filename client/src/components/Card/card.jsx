import { Link } from "react-router-dom";
import "./card.styles.css";

const Card = ({driver}) => {
  const { image, name, teams, id } = driver;
  return (
      <Link to={ `/home/${id}`} style={{textDecoration: 'none', color: 'inherit'}}>
    <div className="card-container">
      {driver.image && <img src={image} alt={name} />}
      {driver.name && <h2>{ name.forename + ' ' + name.surname }</h2>}
      {driver.teams && <p>{ teams }</p>}
    </div>
      </Link>
  );
};

export default Card;
