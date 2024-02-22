const Card = ({driver}) => {
// console.log(driver);
  const { image, name, teams } = driver;

  return (
    <div>
      <img src={image.url} alt={name} />
      <h2>{ name.forename + ' ' + name.surname }</h2>
      <p>{ teams }</p>
    </div>
  );
};

export default Card;
