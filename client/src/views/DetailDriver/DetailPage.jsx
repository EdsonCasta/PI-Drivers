import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function DetailPage() {
  const { id } = useParams();
  const [driver, setDriver] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDriver = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/drivers/${id}`);
        setDriver(response.data);
      } catch (error) {
        console.error('Error al obtener los detalles del conductor:', error.message);
        setError('Error al cargar los detalles del conductor.');
      } finally {
        setLoading(false);
      }
    };

    fetchDriver();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Link to={"/home"}>
        <button>Regresar</button>
      </Link>
      <h1>Detalles del conductor</h1>
      {driver && (
        <>
          <h2>ID: {driver.id}</h2>
          <h2>Name: {driver.Forename || driver.name.forename}</h2>
          <h2>Lastname: {driver.Surname || driver.name.surname}</h2>
          <h2>Nacionality: {driver.Nationality || driver.nationality}</h2>
          <img src={driver.Image || driver.image.url || 'https://static.displate.com/857x1200/displate/2023-11-03/1054e299bcc7724411f6e6a14a0b7752_228283cdec3d85bfe6c8493e24101b8d.jpg'} alt="Driver" />
          <h2>Description: {driver.Description || driver.description}</h2>
          <h2>Birthdate: {driver.BirthDate || driver.dob}</h2>
          <h2>Teams: {driver.Teams ? driver.Teams.map(team => team.Name).join(', ') : driver.teams}</h2>
        </>
      )}
    </div>
  );
}

export default DetailPage;
