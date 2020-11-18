import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
function signin (){
    return (

        <div className="signin-section ">
        <h1 className="signin">Sign In/Login</h1>
        <form   id="SigninForm">
            <div className="container"> 
            <label htmlFor="email"><b>Email</b></label>
            <input name="email" type="email" placeholder="  Enter Email" required></input>
            <label htmlFor="password"><b>Password</b></label>
            <input name="password" type="password" placeholder="  Enter Password" required></input>
            <button className="signin-btn btn">Sign in</button>

            <div className="no-account" >
                    <p> If you don't have an account please
                        <NavLink to="/register"><a> Register </a>
                        </NavLink>
                    </p>
            </div>

            </div>
        </form>
        </div>
    )
}
export default signin;