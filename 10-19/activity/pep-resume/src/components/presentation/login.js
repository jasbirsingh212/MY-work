import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
function Login (){
    return (

        <div className="signup-section">
        <h1 className="signup">Sign up/Register</h1>
        <form   id="SignupForm">
            <div className="container"> 
            <label htmlFor="email"><b>Email</b></label>
            <input name="email" type="email" placeholder="  Enter Email" required></input>
            <label htmlFor="password"><b>Password</b></label>
            <input name="password" type="password" placeholder="  Enter Password" required></input>
            <label htmlFor="name"><b>Name</b></label>
            <input name="name" type="name" placeholder="  Enter Name" required></input>
            <button className="signup-btn btn">Sign up</button>

            <div className="account" >
                    <p> If you have an account please
                        <NavLink to="/login"><a> Login </a>
                        </NavLink>
                    </p>
            </div>

            </div>
        </form>
        </div>
    )
}
export default Login;