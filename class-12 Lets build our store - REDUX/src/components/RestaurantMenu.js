import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';
import useRestaurant from '../hooks/useRestaurant';
import { addItem } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
    // how to read a dynamic url params
    const { id } = useParams();

    const restaurant = useRestaurant(id);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div className="menu flex">
            <div className="restraunt-menu">
                <h1>Restaurant id: {restaurant?.id}</h1>
                <h2>{restaurant?.name}</h2>
                {restaurant?.cloudinaryImageId && <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="image" />}
                <h3>{restaurant?.area}</h3>
                <h3>{restaurant?.city}</h3>
                <h3>{restaurant?.avgRating}</h3>
                <h3>{restaurant?.cuisines?.join(', ')}</h3>
            </div>
            <div className="menu-items m-8 p-10">
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant?.menu?.items ? restaurant.menu.items : {}).map((item) => {
                        return (
                            <li key={item?.id} className={'flex content-between'}>
                                {item?.name}
                                <button className={'bg-green-500 p-2 m-2'} onClick={() => addFoodItem(item)}>
                                    Add Item
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
