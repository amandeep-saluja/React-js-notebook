import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import useOnline from '../hooks/useOnline';
import { useContext, useState } from 'react';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import useLocalStorage from '../hooks/useLocalStorage';
const Title = () => {
    return (
        <img
            data-testid="logo"
            className="logo h-32 p-2 m-2"
            alt="logo"
            // src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
            src={Logo}
        />
    );
};

const Header = () => {
    const isOnline = useOnline();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { user } = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);
    const key = 'foodItems';
    const { cart, setCart } = useLocalStorage(key, cartItems);

    console.log('cart', cart);
    console.log(cartItems);
    return (
        <>
            <nav className="flex justify-between content-center bg-pink-50 shadow-lg m-10">
                <Title />
                {isOnline ? (
                    <span data-testid="online-status" style={{ padding: '40px' }}>
                        ✅
                    </span>
                ) : (
                    <span data-testid={'offline-status'} style={{ padding: '40px' }}>
                        {' '}
                        ❌
                    </span>
                )}
                <ul className={'flex m-10 text-2xl'}>
                    <li className={'m-5'}>
                        <Link to={'/'} className="link">
                            Home
                        </Link>
                    </li>

                    <li className={'m-5'}>
                        <Link to={'/about'} className="link">
                            About
                        </Link>
                    </li>

                    <li className={'m-5'}>
                        <Link to={'/contact'} className="link">
                            Contact
                        </Link>
                    </li>
                    <li className={'m-5'}>
                        <Link to={'/instamart'} className="link">
                            Instamart
                        </Link>
                    </li>
                    <li className={'m-5'}>
                        <Link to={'/cart'} data-testid={'cart'}>
                            Cart {cartItems.length} items
                        </Link>
                    </li>
                </ul>
                {user && isLoggedIn && <div className={'p-10 m-8 text-xl font-bold text-red-900'}>{user.name}</div>}
                {isLoggedIn ? (
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                ) : (
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                )}
            </nav>
        </>
    );
};

export default Header;
