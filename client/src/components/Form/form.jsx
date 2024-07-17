import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createDriver, resetDriver } from '../../redux/actions';

function Form() {

  const allTeams = useSelector(state => state.allTeam);

  const [input, setInput] = useState({
    Forename: "",
    Surname: "",
    Description: "",
    Image: "",
    Nationality: "",
    BirthDate: "",
    Teams: []
  });

  const [newTeam, setNewTeam] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const driverState = useSelector(state => ({
    loading: state.loading,
    error: state.error,
    driver: state.driver
}));

  function validate(input) {
    let errors = {};
    if (!input.Forename) {
      errors.Forename = "El nombre es obligatorio.";
    } else if (/[^a-zA-Z ]/.test(input.Forename)) {
      errors.Forename = "El nombre no puede contener símbolos.";
    }
    if (!input.Surname) {
      errors.Surname = "El apellido es obligatorio.";
    }
    if (!input.Nationality) {
      errors.Nationality = "La nacionalidad es obligatoria.";
    }
    if (!input.BirthDate) {
      errors.BirthDate = "La fecha de nacimiento es obligatoria.";
    }
    if (!input.Description) {
      errors.Description = "La descripción es obligatoria.";
    }
    if (input.Teams.length === 0) {
      errors.Teams = "Debe seleccionar al menos una escudería.";
    }
    return errors;
  }

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  }

  function handleSelectChange(event) {
    const selectedOptions = Array.from(event.target.selectedOptions).map(option => option.value);
    setInput(prevInput => ({
      ...prevInput,
      Teams: Array.from(new Set([...prevInput.Teams, ...selectedOptions])) // Evitar duplicados
    }));
  }

  function handleAddTeam(event) {
    if (event.key === 'Enter' && newTeam) {
      setInput(prevInput => ({
        ...prevInput,
        Teams: [...prevInput.Teams, newTeam]
      }));
      setNewTeam(''); // Limpiar el campo
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(input);
    if (Object.keys(validationErrors).length === 0) {
      const dataToSend = {
        ...input,
        Teams: input.Teams.join(',') // Convierte el array a un string
      };
      dispatch(createDriver(dataToSend));
    } else {
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    if (driverState.driver) {
        alert('Driver creado con éxito!');

        setInput({
          Forename: "",
          Surname: "",
          Description: "",
          Image: "",
          Nationality: "",
          BirthDate: "",
          Teams: []
      });
        dispatch(resetDriver()); // Resetear el estado del driver
    }
}, [driverState.driver, dispatch]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Forename">Nombre</label>
          <input name="Forename" value={input.Forename} onChange={handleChange} />
          {errors.Forename && <p>{errors.Forename}</p>}
        </div>
        <div>
          <label htmlFor="Surname">Apellido</label>
          <input name="Surname" value={input.Surname} onChange={handleChange} />
          {errors.Surname && <p>{errors.Surname}</p>}
        </div>
        <div>
          <label htmlFor="Nationality">Nacionalidad</label>
          <input name="Nationality" value={input.Nationality} onChange={handleChange} />
          {errors.Nationality && <p>{errors.Nationality}</p>}
        </div>
        <div>
          <label htmlFor="Image">Imagen</label>
          <input name="Image" value={input.Image} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="BirthDate">Fecha de Nacimiento</label>
          <input name="BirthDate" type="date" value={input.BirthDate} onChange={handleChange} />
          {errors.BirthDate && <p>{errors.BirthDate}</p>}
        </div>
        <div>
          <label htmlFor="Description">Descripción</label>
          <textarea name="Description" value={input.Description} onChange={handleChange} />
          {errors.Description && <p>{errors.Description}</p>}
        </div>
        <div>
          <label htmlFor="Teams">Escuderías</label>
          <select name="Teams" multiple={true} value={input.Teams} onChange={handleSelectChange}>
            {allTeams && allTeams.map(team => (
              <option key={team} value={team}>{team}</option>
            ))}
          </select>
          <input 
            type="text" 
            placeholder="Agregar nueva escudería" 
            value={newTeam} 
            onChange={(e) => setNewTeam(e.target.value)} 
            onKeyDown={handleAddTeam} 
          />
          {errors.Teams && <p>{errors.Teams}</p>}
          <div>
            <strong>Escuderías seleccionadas:</strong>
            <ul>
              {input.Teams.map((team, index) => (
                <li key={index}>{team}</li>
              ))}
            </ul>
          </div>
        </div>
        <button type="submit">Submit</button>
        {driverState.loading && <p>Enviando datos...</p>}
        {driverState.error && <p>Error: {driverState.error}</p>}
      </form>
    </div>
  );
}

export default Form;
