import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByName, getDrivers } from "../../redux/actions" 

import SearchBar from "../../components/Navbar/SearchBar";
import Cards from "../../components/Cards/cards";

import "./home.styles.css"

function HomePage () {

  const dispatch = useDispatch();
  const allDrivers = useSelector((state) =>  state.allDrivers);
  const [ searchString, setSearchString ] = useState("");

  function handleChange(valor) {
    valor.preventDefaul();
    setSearchString(valor.target.value);
  }

  function handleSubmit(valor) {
    valor.preventDefaul();
    dispatch(getByName(searchString))
  }

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  return (
    <div className="home">
      <h1 className="home-title">Drivers in F1</h1>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Cards allDrivers={allDrivers}/>
    </div>
  );
};

export default HomePage;
