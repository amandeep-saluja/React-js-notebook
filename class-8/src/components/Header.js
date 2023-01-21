import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";

const Title = () => {
  return (
    <a>
      <img
        className="logo"
        alt="logo"
        // src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
        src={Logo}
      />
    </a>
  );
};

const Header = () => {
  return (
    <>
      <nav className="nav">
        {/* {Title()} */}
        <Title />
        <ul>
          <li>
            <Link to={"/"} className="link">
              Home
            </Link>
          </li>

          <li>
            <Link to={"/about"} className="link">
              About
            </Link>
          </li>

          <li>
            <Link to={"/contact"} className="link">
              Contact
            </Link>
          </li>
          <li>Cart</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
