import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Footer = () => {
    const { user } = useContext(UserContext);
    return (
        <div className="bg-purple-400 p-10 m-10 flex justify-center font-bold text-2xl">
            <div>
                This page is developed by - {user.name} - {user.email}
            </div>
        </div>
    );
};
export default Footer;
