import React from "react";
import update from 'immutability-helper';
import {NavLink} from 'react-router-dom'


  class signin extends React.Component {
  constructor(props, context) {
    super(props, context);
            this.state = {
              auth:{'email':'','password':''}
          };       
    }
 
    onChange=(event)=>{
        var key =event.target.name;
        var val =event.target.value;
        this.setState({...this.state, auth:{...this.state.auth, [key]:val}});
    }
    onSubmit=()=>{
       this.props.authActions.signIn(this.state.auth)
    }


    componentWillReceiveProps(nextProps){
      
      this.setState({auth:update(this.state.auth,{$merge: nextProps.auth})});      
      if(nextProps.fbData.uid){
        this.props.history.push('/')
      }
    }
    
render(){
    return (

        <div className="signin-section ">
        <h1 className="signin">Sign In/Login</h1>
            <div className="container"> 
            <label htmlFor="email"><b>Email</b></label>
            <input name="email" type="email" value={this.state.auth.email} onChange={this.onChange} placeholder="Enter Email" required></input>
            <label htmlFor="password"><b>Password</b></label>
            <input name="password" type="password" value={this.state.auth.password} onChange={this.onChange} placeholder="Enter Password" required></input>
            <button className="signin-btn btn" onClick={this.onSubmit}>Sign in</button>
        <div className='error-occued'>
            {this.state.auth.ErrorMessage}
        </div>
            <div className="no-account" >
                    <p> If you don't have an account please
                        <NavLink to="/register"> Register</NavLink>
                    </p>
            </div>

            </div>
        </div>
    )
}
  }
export default signin;