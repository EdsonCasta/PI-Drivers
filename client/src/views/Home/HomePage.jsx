import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../../redux/actions" 

import SearchBar from "../../components/Navbar/SearchBar";
import Cards from "../../components/Cards/cards";

function HomePage () {

  const dispatch = useDispatch();
  const allDrivers = useSelector((state) =>  state.allDrivers);

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  return (
    <div>
      <SearchBar />
      <Cards allDrivers={allDrivers}/>
    </div>
  );
};

export default HomePage;
