import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { LoginContext } from '../App';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const LoginStatus = useContext(LoginContext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    const onSubmit = () => {
        fetch("http://localhost:3001/api/user/login", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.message === "user match") {
                    LoginStatus.setLogStatus(true);
                    history.push("/");
                } else {
                    console.log("erreur");
                }
            });

    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email", { required: true, onChange: (e) => setEmail(e.target.value), pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                {errors.email && <span>Votre adresse email n'est pas valide</span>}
                <input type="password" {...register("password", { required: true, onChange: (e) => setPassword(e.target.value) })} />
                {errors.password && <span>Votre mot de passe est trop court</span>}
                <button className="button" type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default Login;