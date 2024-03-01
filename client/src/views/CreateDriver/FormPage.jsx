import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/form";

const FormPage = () => {
  return (
    <div>
      <Link to={"/home"}>
        <button>Atras</button>
      </Link>
      <h1>CREATE A NEW DRIVER</h1>
      <Form />
    </div>
  );
};

export default FormPage;
