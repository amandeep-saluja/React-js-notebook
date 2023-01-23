import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    //API call
    const timer = setInterval(() => {
      console.log("NAMASTE REACT OP...!!!");
    }, 1000);
    console.log("FBC child useEffect");

    return () => {
      //This is called when Functional component gets unmounted.
      clearInterval(timer);
      console.log("useEffect return");
    };
  }, []);
  console.log("FBC child render", props);

  return (
    <div>
      <h2>Profile component</h2>
      <h3>{props.name}</h3>
      <h3>{props.surname}</h3>
      <h3>Count: {count}</h3>
      <h3>Count2: {count2}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2(count2 + 1);
        }}
      >
        setCount
      </button>
    </div>
  );
};

export default Profile;
