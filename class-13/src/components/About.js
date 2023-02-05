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
                <UserContext.Consumer>
                    {({ user }) => {
                        console.log(user.name);
                        return (
                            <span className={'font-bold text-3xl text-red-600 p-10'}>
                                {user.name} - {user.email}
                            </span>
                        );
                    }}
                </UserContext.Consumer>
                <p> This is Namaste react js class</p>
                <Profile name={'Aman'} xyz={'First '} />
            </div>
        );
    }
}

export default About;
