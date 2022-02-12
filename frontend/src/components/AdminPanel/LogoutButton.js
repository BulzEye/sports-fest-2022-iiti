import React from 'react';
import { GoogleLogout } from 'react-google-login';
import clientID from './googleClient';
import { authContext } from '../../App';
import { useContext } from 'react';

function LogoutButton() {
    const updateAuth = useContext(authContext)
    const logout = res => {
        updateAuth(false, null)
    }
    const logoutFailure = res => {
        console.log(res)
    }
    return (
        <GoogleLogout
            clientId={clientID}
            render={renderProps => (
                <button className="dropdown-item text-danger" onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</button>
            )}
            buttonText="Logout"
            onLogoutSuccess={logout}
            onFailure={logoutFailure}
        />
    )
};

export default LogoutButton;