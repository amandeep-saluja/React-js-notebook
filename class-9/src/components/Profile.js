import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    //API call
    // console.log("useEffect");
  });
  // console.log("render");

  return (
    <div>
      <h2>Profile component</h2>
      <h3>{props.name}</h3>
      <h3>{props.xyz}</h3>
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
