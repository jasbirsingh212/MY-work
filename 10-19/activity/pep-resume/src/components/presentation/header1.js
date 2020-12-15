import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions';

function LoggedIn(params) {
  let uid =params.auth.email;
  return (

        <ul>
           
            <li className="">             
               <a onClick={()=>{params.signOut()}} className=" text-white btnv-3" type='button'><i className="fa fa-user"></i></a>      
            </li>
          </ul>
  )

}

function LoggedOut(props) {
  return (
    <ul>
      
      <li className="signin"> 
        <NavLink className="text-yellow btnv-3" to="/login">
        Sign In
        </NavLink>         
      </li>
    </ul>
  )
}

const header = (props) => {
  const { auth } = props;
  return (      
  <header className="header">
  <nav className="nav">
      <a href="/" className="header-logo">
       <span className="header-icon bold">Pep</span>  <span className="header-icon"> Resume </span> 
      </a> 
        <div className="header-links full-height">
        {auth && auth.uid ?<LoggedIn auth={auth} signOut={props.authActions.signOut}></LoggedIn>:<LoggedOut></LoggedOut>} 
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
