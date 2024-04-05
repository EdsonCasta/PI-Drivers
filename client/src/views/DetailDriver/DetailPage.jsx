import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function DetailPage() {
  const { id } = useParams();
  const [driver, setDriver] = useState({});

  useEffect(() => {
    const fetchDriver = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/drivers/${id}`);
        setDriver(response.data);
      } catch (error) {
        console.error('Error al obtener los detalles del conductor:', error.message);
      }
    };

    fetchDriver();
  }, [id]);

  return (
    <div>
      <Link to={"/home"}>
        <button>Regresar</button>
      </Link>
      <h1>Detalles del conductor</h1>
      {driver.id && (
        <>
          <h2>ID: {driver.id}</h2>
          <h2>Name: {driver.name.forename}</h2>
          <h2>Lastname: {driver.name.surname}</h2>
          <h2>Nacionality: {driver.nationality}</h2>
          <img src={driver.image.url} />
          <h2>Description: {driver.description}</h2>
          <h2>Birthdate: {driver.dob}</h2>
          <h2>Teams: {driver.teams}</h2>
        </>
      )}
    </div>
  );
}

export default DetailPage;


