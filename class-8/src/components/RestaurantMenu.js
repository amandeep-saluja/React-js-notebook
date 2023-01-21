import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, RESTAURANT_DETAILS_URL } from "../constants";

const RestaurantMenu = () => {
  // how to read a dynamic url params
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState({});

  console.log("Restaurants ", restaurant);

  useEffect(() => {
    getRestaurantDetails();
    console.log("use effect");
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(RESTAURANT_DETAILS_URL + id);
    const json = await data.json();
    setRestaurant(json?.data);
  }

  return (
    <div className="menu">
      <div className="restraunt-menu">
        <h1>Restaurant id: {restaurant?.id}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.cuisines?.join(", ")}</h3>
      </div>
      <div className="menu-items">
        <h1>Menu</h1>
        <ul>
          {Object.values(
            restaurant?.menu?.items ? restaurant.menu.items : {}
          ).map((item) => {
            return <li key={item?.id}>{item?.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
