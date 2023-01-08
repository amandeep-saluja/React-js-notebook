const Title = () => {
  return (
    <a>
      <img
        className="logo"
        alt="logo"
        src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
      />
    </a>
  );
};

const Header = () => {
  return (
    <>
      <nav className="nav">
        <Title/>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;