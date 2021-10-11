import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function CreateUser() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [EmailNewUser, setEmailNewUser] = useState();
    const [PasswordNewUser, setPasswordNewUser] = useState();
    const [NameNewUser, setNameNewUser] = useState();
    const [LastNameNewUser, setLastNameNewUser] = useState();
    const [BufferPassword, setBufferPassword] = useState();
    const onSubmit = () => {
        fetch("http://localhost:3001/api/user/", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify({
                email: EmailNewUser,
                password: PasswordNewUser,
                name: NameNewUser,
                lastName: LastNameNewUser,
                isAdmin: true
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res.message);
            });
    };
    return (
        <div>
            <h3>Add an admin</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nom</label>
                <input type="text" {...register("lastName", { required: true, onChange: (e) => setLastNameNewUser(e.target.value) })}></input>
                <label>Prenom</label>
                <input type="text" {...register("name", { required: true, onChange: (e) => setNameNewUser(e.target.value) })}></input>
                <label>Mot de passe</label>
                <input type="password" {...register("password", { required: true, onChange: (e) => setBufferPassword(e.target.value) })}></input>
                <label>Confirmez Mot de passe</label>
                <input type="password" {...register("confirmPassword", { required: true, onChange: (e) => e.target.value === BufferPassword ? setPasswordNewUser(e.target.value) : null })}></input>
                {errors.confirmPassword && <span>Votre mot de passe ne correspond pas</span>}
                <label>Email</label>
                <input type="email" {...register("email", { required: true, onChange: (e) => setEmailNewUser(e.target.value), pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}></input>
                {errors.email && <span>Votre email n'est pas valide</span>}
                <input type="submit" value="Creer"></input>
            </form>
        </div>
    );
}