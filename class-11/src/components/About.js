import { Component } from 'react';
import Profile from './ProfileClass';
import UserContext from '../utils/UserContext';

class About extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        console.log(this.props);
        console.log('parent constructor');
    }

    componentDidMount() {
        console.log('parent did mount');
    }

    render() {
        const user = UserContext.Provider;
        console.log('parent render', user);
        return (
            <div>
                <h1>About Us Page</h1>
                <p> This is Namaste react js class</p>
                {/* <Outlet /> */}
                <Profile name={'Aman'} xyz={'First '} />
                {/* <Profile name={"Aman"} xyz={"second "} /> */}
                {/* <Profile name={"Amandeep"} xyz={"jnafs"} /> */}
            </div>
        );
    }
}

export default About;
