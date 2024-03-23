import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers, getByName } from "../../redux/actions"
import { Link } from "react-router-dom";

import SearchBar from "../../components/Navbar/SearchBar";
import Filter from "../../components/Filters/filterByTeams"
import Order from "../../components/Filters/sortAsendingAndDesending"
import Pagination from "../../components/Pagination/pagination";

import "./home.styles.css"

function HomePage() {

  const dispatch = useDispatch();
  
  const [searchString, setSearchString] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getByName(searchString))
  }

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  return (
    <div className="home">
      <Link to={"/"}>
        <button>Atras</button>
      </Link>
      <h1 className="home-title">Drivers in F1</h1>
      <Link to={"/create"}>
        <button>Create by driver</button>
      </Link>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Filter />
      <Order />
      <Pagination />
    </div>
  );
};

export default HomePage;
