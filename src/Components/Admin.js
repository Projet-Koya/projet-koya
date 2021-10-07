import React from 'react';
import { LoginContext } from '../App';
import { useContext } from 'react';
import UserInfo from './UserInfo'

const Admin = () => {
    const LoginStatus = useContext(LoginContext);
    if (LoginStatus.LogStatus !== true) {
        console.log("Pas connecté");
        return null;
    }
    return (
        <div>
            <h1>Page d'admin</h1>
            <UserInfo/>
        </div>
    );
};

export default Admin;