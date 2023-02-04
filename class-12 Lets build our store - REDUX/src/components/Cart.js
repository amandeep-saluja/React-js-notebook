import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import FoodItem from './FoodItem';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCard = () => {
        dispatch(clearCart());
    };
    // store => store -> it subscribe to whole store
    // store => store.cart -> it subscribe to cart from the store
    // store=> store.cart.items - >it subscribe to only item from cart of whole store
    // But this will create a major performance issue.
    return (
        <div className={'flex'}>
            <div className={'text-2xl font-bold p-4 m-4'}>CartItems - {cartItems.length} items</div>
            <button
                onClick={() => {
                    handleClearCard();
                }}
            >
                Clear cart
            </button>
            <div className={'flex p-4 m-4'}>
                {Array.of(cartItems.length)
                    .fill(0)
                    .map((item) => {
                        console.log(item);
                        return <FoodItem {...item} key={item.id} />;
                    })}
            </div>
        </div>
    );
};

export default Cart;
