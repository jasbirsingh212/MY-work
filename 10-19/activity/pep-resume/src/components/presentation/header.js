import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../static/images/logo.png";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions';

function LoggedIn(params) {
  let uid =params.auth.email;
  let signoutErr=params.auth.ErrorMessage;
  return (
    
           <ul>
            <li className="">             
               <a onClick={()=>{params.signOut()}} className=" text-white btnv-3" type='button'>{uid}</a>      
            </li>
            <div className='error-occured'>{signoutErr}</div>
          </ul>
  )

}

function LoggedOut(props) {
  return (
                                                                                                              
    
    <ul>
            <li className="signup ">
              <NavLink className=" btnv-1" to="/register">
               Register
              </NavLink>
            </li>
            <li className="signin"> 
              <NavLink className="text-blue btnv-3" to="/login">
              Sign In
              </NavLink>         
            </li>
          </ul> 
  )
}



const header = (props) => {


  const {auth} =props;
  return (  
  <header className="header">
  <nav className="nav">
      <a href="/" className="holder-logo">
        <img className='logo' src={logo}></img>
      </a> 
        <div className="header-links full-height">
        {auth && auth.uid ?<LoggedIn auth={auth} signOut={props.authActions.signOut}></LoggedIn>:<LoggedOut></LoggedOut>} 
        <ul id="nav-mid">
            <li>
            <NavLink className="btn-nvt-gm" to="/resume-templates">
            Resume Templates
            </NavLink>
            </li> 
            <li className="holder-pricing">            
              <NavLink className="btn-nvt-gm" to="/about-us">
              About Us
              </NavLink>
            </li>        
          </ul>
      </div>   
    </nav>
  </header>

  );
};


const mapStateToProps=(state)=>{
  return{
     auth: state.firebase.auth
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
     authActions:bindActionCreators(authActions, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(header);