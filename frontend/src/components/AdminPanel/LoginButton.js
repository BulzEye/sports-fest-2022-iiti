import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import clientID from './googleClient';
import { authContext } from '../../App';
import { useContext } from 'react';

function LoginButton(props) {
    const updateAuth = useContext(authContext);

    const LoginSuccess = (res) => {
        axios.post('http://localhost:5000/api/login', {
            googleToken: res.tokenId
        })
            .then(res => {
                console.log(res)
                res.status === 200 && updateAuth(true, res.data)
            })
            .catch(err => {
                err.response.status === 403 &&
                    alert("You are not authorised")
            })
    };

    const LoginFail = (res) => {
        console.log(res);
    }
    return (
        <div className='m-auto' >
            <GoogleLogin
                clientId={clientID}
                buttonText="Login"
                onSuccess={LoginSuccess}
                isSignedIn={false}
                onFailure={LoginFail}
                cookiePolicy={'single_host_origin'}
            onAutoLoadFinished={LoginSuccess}
            />
        </div>
    )
};


export default LoginButton;


