import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { auth } from './firebase';
import { login } from './features/userSlice'
import "./Login.css"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser){
                console.log(authUser);
                setUser(authUser);
            }else{
                setUser(null);
            }
        })
        return () => {
            unsubscribe();
        }

    }, [user, name]);

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(function() {
            var user = auth.currentUser
        })
    };

    const register = (e) => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) =>{
            authUser.user.updateProfile({
                displayName: name
            })
        })
        .catch((error) => alert(error.message))
        if (!name){
            return alert("Please enter a full name!")
        }
};

    return (
        <div className="login">
            <img src="https://i.ibb.co/g7y874s/Workin-Logo.png"
            alt=""
            />

            <form>
                <input
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 placeholder="Full name" 
                 type="text" />
                <input
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="Email" 
                 type="email" />
                <input
                 value={phoneNumber}
                 onChange={(e) => setPhoneNumber(e.target.value)}
                 placeholder="Phone Number" 
                 type="text" />
                <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                type="password" />
                <input 
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                placeholder="profile pic URL" 
                type="text" />

                <button type='submit' onClick={loginToApp}> Sign in </button>
            </form>
            <p>Not a Member?
                <span className="login__register" onClick={register}> Register Now!</span>
            </p>   
        </div>
    )
}

export default Login
