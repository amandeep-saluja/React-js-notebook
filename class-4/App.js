import React from "react";
import ReactDOM from "react-dom/client";
import { cards } from "./data.json";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const Header = () => {
  return (
    <nav className="nav">
      <a>
        <img
          className="logo"
          alt="logo"
          src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
        />
      </a>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};

const restaruntList = [
  {
    name: "Burger King",
    imageUrl:
      "https://b.zmtcdn.com/data/pictures/chains/8/18138658/ef5d98d593dd983ace605992ad3d2f35.jpg",
    cusines: ["Burger", "American"],
    rating: "4.2",
  },
];

const RestrauntCard = (data) => {
  //   console.log(cards);
  const { name, cloudinaryImageId, cuisines, totalRatingsString } = data;
  return (
    <div className="card">
      <img
        className="card-image"
        alt="card-image"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{totalRatingsString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      {cards.map((card, index) => (
        <RestrauntCard {...card.data} key={index} />
      ))}
      {/* <RestrauntCard data={cards[0]} />
      <RestrauntCard data={cards[1]} />
      <RestrauntCard data={cards[2]} />
      <RestrauntCard data={cards[3]} />
      <RestrauntCard data={cards[4]} /> */}
    </div>
  );
};

const Footer = () => {
  return <div>Footer</div>;
};

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<AppLayout />);
