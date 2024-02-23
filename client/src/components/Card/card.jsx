import { Link } from "react-router-dom";
import "./card.styles.css";

const Card = ({driver}) => {
// console.log(driver);
  const { image, name, teams, id } = driver;

  return (
    <div className="card-container">
      <Link to={ `/home/${id}`} >
      <img src={image.url} alt={name} />
      <h2>{ name.forename + ' ' + name.surname }</h2>
      <p>{ teams }</p>
      </Link>
    </div>
  );
};

export default Card;
