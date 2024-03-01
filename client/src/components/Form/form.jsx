import { useState } from "react";
import axios from "axios";

function Form() {
  const [input, setInput] = useState({
    Name: "",
    Lastname: "",
    Nationality: "",
    Image: "",
    Birthdate: "",
    Description: "",
    Teams: ""
  })

  function handleChange(event){
    setInput({
      ...input,
      [event.target.name]:event.target.value
    })
  }

  const handleSubmit = async(event) => {
    event.preventDefault(); 
    try {
      const response = await axios.post('http://localhost:5000/drivers', input);
    } catch (error) {
      console.error('Error al enviar la solicitud al servidor:', error.message);
    }
  }

    return (
      <div >
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="Name">Nombre</label>
                <input name="Name" value={input.Name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="Lastname">Apellido</label>
                <input name="Lastname" value={input.Lastname} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="Nationality">Nacionalidad</label>
                <input name="Nationality" value={input.Nationality} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="Image">Imagen</label>
                <input name="Image" value={input.Image} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="Birthdate">Fecha de Nacimiento</label>
                <input name="Birthdate" value={input.Birthdate} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="Description">Descripcion</label>
                <input name="Description" value={input.Description} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="Teams">Escuderias</label>
                <input name="Teams" value={input.Teams} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default Form;