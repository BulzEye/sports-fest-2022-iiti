import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';

const AdminPanel = (props) => {
    const { auth } = props;
    if (auth) {
        return (
            <div className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/#events" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Admin Panel
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/editEvents">Events</Link></li>
                    <li><Link className="dropdown-item" to="/editSponsors">Sponsors</Link></li>
                    <li><Link className="dropdown-item" to="/editPartners">Partners</Link></li>
                    <li><Link className="dropdown-item" to="/editAdmins">Admins</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li> <LogoutButton className="dropdown-item" /></li>
                </ul>
            </div>
        );
    } else {
        return (
            <LoginButton />
        );
    }
};

export default AdminPanel;