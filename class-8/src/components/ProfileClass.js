import React from "react";
import { json } from "react-router-dom";
import { GITHUB_USER_API } from "../constants.js";
import user from "../../user.json";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("CBC child constructor", this.props.name);
    // Create State variable
    // to create state variables in react, we have to create it inside the constructor,
    // best place to create the state variable, is constructor of class, as the classes are invoked
    this.state = {
      count: 0,
      count2: 0,
      userInfo: json,
    };
  }

  async componentDidMount() {
    //Best place to make an Api call

    const data = await fetch(GITHUB_USER_API);
    console.log(data);
    const json = await data.json();
    console.log(json);
    // const json = user;
    // How will I update my UI now with API data?
    // By creating state variable...

    this.setState({
      userInfo: json,
    });

    console.log("CBC child component did mount", this.props.name);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    /*if (this.props.name !== prevProps.name) {
      console.log(`name changed from ${prevProps.name} to ${this.props.name}`);
    }
    if (this.state.count !== prevState.count) {
      console.log(
        `count changed from ${prevState.count} to ${this.state.count}`
      );
    }
    if (this.state.count2 !== prevState.count2) {
      console.log(
        `count2 changed from ${prevState.count2} to ${this.state.count2}`
      );
    }
    console.log(this.state, prevState);
    console.log(this.props, prevProps);
    console.log(snapshot);*/
    this.timer = setInterval(() => {
      console.log("NAMASTE REACT OP...!!!");
    }, 1000);
    console.log("Child Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Child Component will unmount");
  }

  render() {
    console.log("CBC child render", this.props.name);
    const { count, count2 } = this.state;
    const { userInfo } = this.state;
    const { name, surname } = this.props;
    return (
      <div>
        <h1>Profile class component</h1>
        <h3>{name}</h3>
        <h3>{surname}</h3>
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
        </button>
        <img src={userInfo.avatar_url} />
        <h2>Name: {userInfo.name}</h2>
        <h2>Location: {userInfo.location}</h2>
      </div>
    );
  }
}

export default Profile;
