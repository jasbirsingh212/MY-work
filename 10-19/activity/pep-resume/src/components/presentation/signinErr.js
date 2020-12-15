import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class signinErr extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='not-user ' >
            <h1> You are Either not Registered or Signed in.</h1>
            <div className='not-user-section'>
               <h2>If you are New user</h2>
             <NavLink to="/register">
               <button  className='btn'>Register</button>
             </NavLink>
               <h2>If you are Registered</h2> 
             <NavLink to="/login">
             <button  className='btn'>Sign in</button>
             </NavLink>
             </div>
         </div>
         );
    }
}
 
export default signinErr;