import { useState } from "react";
import { cards as RestaurantList } from "../../data.json";
import RestrauntCard from "./Restaurant";

// What is state?
// What is React Hooks? - functions.
// What is
function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText)
  );
}

const Body = () => {
  // searchText is a local state variable
  const [searchTxt, setSearchTxt] = useState(""); // To create state variable

  const [restaurants, setRestaurants] = useState(RestaurantList);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            console.log(e.target.value);
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchTxt, RestaurantList);
            //update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestrauntCard {...restaurant.data} key={restaurant.data.uuid} />
        ))}
      </div>
    </>
  );
};

export default Body;
