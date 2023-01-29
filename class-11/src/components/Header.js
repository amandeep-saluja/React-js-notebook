import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import useOnline from '../hooks/useOnline';
import { useContext, useState } from 'react';
import UserContext from '../utils/UserContext';
const Title = () => {
    return (
        <img
            className="logo h-28 p-2"
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
    return (
        <>
            <nav className="flex justify-between content-center bg-pink-50 shadow-lg">
                <Title />
                {isOnline ? <span style={{ padding: '40px' }}>✅</span> : <span style={{ padding: '40px' }}> ❌</span>}
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
                    <li className={'m-5'}>Cart</li>
                </ul>
                {user && isLoggedIn && <div className={'p-10 m-8 text-xl font-bold'}>{user.name}</div>}
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
