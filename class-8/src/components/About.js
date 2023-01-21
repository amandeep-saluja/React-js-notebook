import { Component } from "react";
import { Outlet } from "react-router-dom";
import { GITHUB_USER_API } from "../constants";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p> This is Namaste react js class</p>
        {/* <Outlet /> */}
        <Profile name={"Aman"} xyz={"First "} />
        {/* <Profile name={"Aman"} xyz={"second "} /> */}
        {/* <Profile name={"Amandeep"} xyz={"jnafs"} /> */}
      </div>
    );
  }
}

export default About;
