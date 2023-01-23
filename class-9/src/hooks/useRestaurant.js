import { useEffect, useState } from "react";
import { RESTAURANT_DETAILS_URL } from "../constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
    console.log("use effect");
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(RESTAURANT_DETAILS_URL + id);
    const json = await data.json();
    setRestaurant(json?.data);
  }

  return restaurant;
};
export default useRestaurant;
