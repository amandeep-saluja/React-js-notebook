import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import RestaurantCard from "./Restaurant";
import Shimmer from "./Shimmer";
import {filterData} from "../utils/helper";
import useOnline from "../hooks/useOnline";

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);

    const [searchTxt, setSearchTxt] = useState("");

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        // API call
        getRestaurants().then(r => r);
        console.log("useEffect called.");
    }, []);

    const isOnline = useOnline();

    if (!isOnline) {
        return <h1>🔴 Offline, please check your internet connection!! </h1>;
    }

    async function getRestaurants() {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.613322&lng=73.800667&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();
            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        } catch (err) {
            console.log(err);
        }
    }

    console.log("render");

    if (!allRestaurants) return null;

    return allRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <>
            <div className="flex justify-around my-8 p-8 bg-pink-50 shadow-lg">
                <input
                    type="text"
                    className="px-4 py-2 rounded-2xl hover:bg-cyan-300 focus:bg-amber-400"
                    placeholder="Search"
                    value={searchTxt}
                    onChange={(e) => {
                        setSearchTxt(e.target.value);
                    }}
                />
                <button
                    className="rounded-2xl bg-purple-400 hover:bg-purple-600 px-8 py-2"
                    onClick={() => {
                        const data = filterData(searchTxt, allRestaurants);
                        setAllRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-list flex flex-wrap">
                {filteredRestaurants.map((restaurant) => (
                    <Link
                        className="link"
                        key={restaurant.data.uuid}
                        to={"/restaurant/" + restaurant.data.id}>
                        <RestaurantCard {...restaurant.data} />
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Body;
