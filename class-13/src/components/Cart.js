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
    return cartItems.length !== 0 ? (
        <div className={'flex flex-col'}>
            <div className={'flex flex-row justify-center'}>
                <div className={'text-2xl font-bold p-4 m-4'}>CartItems - {cartItems.length} items</div>
                <button
                    onClick={() => {
                        handleClearCard();
                    }}
                    className={'bg-amber-300 border-2 rounded-2xl px-4 py-2 self-center cursor-pointer '}
                >
                    Clear cart
                </button>
            </div>
            <div className={'flex flex-row flex-wrap justify-center p-4 m-4'}>
                {cartItems.map((item) => {
                    return <FoodItem {...item} key={item.id} />;
                })}
            </div>
        </div>
    ) : (
        <div className={'text-center font-bold text-4xl p-2 m-2'}>
            <div>Cart is empty</div>
        </div>
    );
};

export default Cart;
