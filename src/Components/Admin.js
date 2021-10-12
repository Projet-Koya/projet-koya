import React, { useEffect, useState } from 'react';
import { LoginContext } from '../App';
import { useContext } from 'react';
import UserInfo from './UserInfo';
// import CreateUser from './createUser/CreateUser';
// import PostNewArticle from './PostNewArticle';
import Sidebar from './AdminPage/Sidebar';
import "./css/Admin.css"




const Admin = () => {
    const LoginStatus = useContext(LoginContext);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser ] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3001/api/user/id/get/${LoginStatus.EmailUser}`)
            .then(res => res.json())
            .then(res => {
                console.log(res.data);
                LoginStatus.setUserID(res.data._id);
                setUser(res.data)
                setIsLoading(false);
            });
    }, []);

    if (LoginStatus.LogStatus === false) {
        console.log("Pas connecté");
        return null;
    }
    // console.log(LoginStatus.userID);
    console.log(user)
    if(isLoading === true) {
        return null
    }
    return (
        <div >
            <Sidebar />
            <div className="container1">
            <h1 className="font1 text-6xl my-8">Page d'admin</h1>
            <div className="content ml-10 mt-16">
            <p className="font-name my-6 text-3xl">Name: {user.name}</p>
            <p className="font-name my-6 text-3xl">Last Name: {user.lastName}</p>
            <p className="font-name my-6 text-3xl">Email: {user.email}</p>
                
            </div>
                
            </div>
            {/* <UserInfo />
            <CreateUser />
            <PostNewArticle /> */}
        </div>
    );
};

export default Admin;