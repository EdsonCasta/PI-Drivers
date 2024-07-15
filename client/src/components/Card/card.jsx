// import { Link } from "react-router-dom";
// import "./card.styles.css";

// const Card = ({driver}) => {
//   const { image, name, teams, id } = driver;
//   return (
//       <Link to={ `/home/${id}`} style={{textDecoration: 'none', color: 'inherit'}}>
//     <div className="card-container">
//       {driver.image && <img src={image} alt={name} />}
//       {driver.name && <h2>{ name.forename + ' ' + name.surname }</h2>}
//       {driver.teams && <p>{ teams }</p>}
//     </div>
//       </Link>
//   );
// };

// export default Card;

import { Link } from "react-router-dom";
import "./card.styles.css";

const Card = ({ driver }) => {
  const { Image, Forename, Surname, Teams, id } = driver;
  return (
    <Link to={`/home/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card-container">
        {Image && <img src={Image} alt={`${Forename} ${Surname}`} />}
        {Forename && Surname && <h2>{Forename + ' ' + Surname}</h2>}
        {Teams && <p>{Teams}</p>}
      </div>
    </Link>
  );
};

export default Card;

