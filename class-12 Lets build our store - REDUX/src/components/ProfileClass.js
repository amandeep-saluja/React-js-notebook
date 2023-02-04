import React from "react";
import { json } from "react-router-dom";
import { GITHUB_USER_API } from "../constants.js";
import user from "../../user.json";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //Create State
    console.log(this.props.xyz + " child constructor");
    this.state = {
      //   count: 0,
      //   count2: 0,
      userInfo: json,
    };
  }

  async componentDidMount() {
    //Best place to make an Api call

    // const data = await fetch(GITHUB_USER_API);
    // const json = await data.json();
    const json = user;

    this.setState({
      userInfo: json,
    });

    console.log(this.props.xyz + "child componentDidMount");
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Did unmount");
  }

  render() {
    console.log(this.props.xyz + "child render");
    // const { count, count2 } = this.state;
    const { userInfo } = this.state;
    return (
      <div>
        <h1>Profile class component</h1>
        {/* <h3>{this.props.name}</h3>
        <h3>{this.props.xyz}</h3>
        <h4>Count: {count}</h4>
        <h4>Count2: {count2}</h4>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
              count2: count2 + 1,
            });
          }}
        >
          setCount
        </button> */}
        <img src={userInfo.avatar_url} />
        <h2>Name: {userInfo.name}</h2>
        <h2>Location: {userInfo.location}</h2>
      </div>
    );
  }
}

export default Profile;
