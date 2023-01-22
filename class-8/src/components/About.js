import { Component } from "react";
import ProfileFunctionalComponent from "./Profile";
import ProfileClassBasedComponent from "./ProfileClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
    this.state = {
      name: "name",
      surname: "surname",
    };
  }

  componentDidMount() {
    console.log("parent did mount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("parent component did update");
  }

  componentWillUnmount() {
    console.log("parent Component will unmount");
  }

  render() {
    console.log("parent render");
    // const [name, surname] = this.state;
    return (
      <div>
        <h1>About Us Page</h1>
        <p> This is Namaste react js class</p>
        <ProfileClassBasedComponent
          name={this.state.name}
          surname={this.state.surname}
        />
        {/*<ProfileClassBasedComponent
          name={"Second Child"}
          surname={this.state.surname}
        />*/}
        <ProfileFunctionalComponent
          name={this.state.name}
          surname={this.state.surname}
        />
        <button
          onClick={() =>
            this.setState({
              name: "name" + Math.random(),
              surname: "surname" + Math.random(),
            })
          }
        >
          change
        </button>
        {/*<Outlet />
        {!location.pathname.includes("profile") ? <span><Link to={"profile"}>Open Profile</Link></span> : <span></span>}*/}
        {/*<Profile name={"Aman"} xyz={"First "} />*/}
        {/* <Profile name={"Aman"} xyz={"second "} /> */}
        {/* <Profile name={"Amandeep"} xyz={"jnafs"} /> */}
      </div>
    );
  }
}

export default About;
