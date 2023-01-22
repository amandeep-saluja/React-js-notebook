import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestrauntCard from "./Restaurant";
import Shimmer from "./Shimmer";

// What is state?
// What is React Hooks? - functions.
// What is
function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
  );
}

const Body = () => {
  const [allRestraunts, setAllRestraunts] = useState([]);

  // searchText is a local state variable
  const [searchTxt, setSearchTxt] = useState(""); // To create state variable

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // -> empty dependency array -> once after first render
  // -> dep arrat [searchTxt] => once after initial render + everytime after render ( my searchTxt changes)
  useEffect(() => {
    // API call
    getRestaurants();
    console.log("useEffect called.");
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.613322&lng=73.800667&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      //Optional Chaining
      //console.log(json?.data?.cards[2]?.data?.data?.cards);
      setAllRestraunts(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    catch (err) {
      console.log(err);
    }
  }

  console.log("render");

  //not render component (Early return)
  if (!allRestraunts) return null;

  // Conditional Rendering
  // if restraunt is empty => shimmer UI
  // if restraunt has data => actual data UI

  return allRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            // console.log(e.target.value);
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchTxt, allRestraunts);
            //update the state - restaurants
            setAllRestraunts(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {/* write  */}
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="link"
            key={restaurant.data.uuid}
            to={"/restaurant/" + restaurant.data.id}
          >
            <RestrauntCard {...restaurant.data} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
