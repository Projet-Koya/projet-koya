import React from 'react';
import { LoginContext } from '../App';
import { useContext } from 'react';

const Admin = () => {
    // const LoginStatus = useContext(LoginContext);
    // if (LoginStatus.LogStatus !== true) {
    //     console.log("Pas connecté");
    //     return null;
    // }
    // console.log("test")
    return (
        <div>
            <h1>Page d'admin</h1>
        </div>
    );
};

export default Admin;