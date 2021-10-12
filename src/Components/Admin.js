import React, { useEffect, useState } from 'react';
import { LoginContext } from '../App';
import { useContext } from 'react';
import UserInfo from './UserInfo';
import CreateUser from './CreateUser';
import PostNewArticle from './PostNewArticle';
import DeleteUser from './DeleteUser';


const Admin = () => {
    const LoginStatus = useContext(LoginContext);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:3001/api/user/id/get/${LoginStatus.EmailUser}`)
            .then(res => res.json())
            .then(res => {
                console.log(res.data);
                LoginStatus.setUserID(res.data._id);
                setIsLoading(false);
            });
    }, []);

    if (isLoading === true) { return null; }
    if (LoginStatus.LogStatus === false) {
        console.log("Pas connecté");
        return null;
    }
    console.log(LoginStatus.userID);
    return (
        <div>
            <h1>Page d'admin</h1>
            <UserInfo />
            <CreateUser />
            <PostNewArticle />
            {/* <DeleteUser/> */}
        </div>
    );
};

export default Admin;