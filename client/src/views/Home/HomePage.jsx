import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByName } from "../../redux/actions"
import { getDrivers, filterCards, orderCards, getPaginatedDrivers } from "../../redux/actions";
import { Link } from "react-router-dom";

import SearchBar from "../../components/Navbar/SearchBar";
import Cards from "../../components/Cards/cards";
import Filter from "../../components/Filters/filterByTeams"
import Order from "../../components/Filters/sortAsendingAndDesending"
import Pagination from "../../components/Pagination/pagination";

import "./home.styles.css"

function HomePage() {

  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);
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

  const handleFilter = (team) => {
    dispatch(filterCards(team));
  };

  const handleOrder = (order) => {
    dispatch(orderCards(order));
  };

  const handlePageChange = (page) => {
    dispatch(getPaginatedDrivers(page));
  };

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
      <Filter handleFilter={handleFilter} />
      <Order handleOrder={handleOrder} />
      <Cards allDrivers={allDrivers} />
      <Pagination handlePageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default HomePage;
