import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import update from 'immutability-helper';

class register extends Component {

    constructor(props,context){
    super(props,context)
    this.state = {
        auth:{
         "email": '',
         "password" : '',
         "name" : ''
        } 
    }
}

UNSAFE_componentWillReceiveProps(nextProps){
      
    this.setState({auth:update(this.state.auth,{$merge: nextProps.auth})});      
    if(nextProps.fbData.uid){
        // console.log(nextProps.fbData.uid);
      this.props.history.push('/',nextProps.fbData.uid)
    }
  }

onChange=(event)=>{
    var key =event.target.name;
    var val =event.target.value;
    this.setState({...this.state, auth:{...this.state.auth, [key]:val}});
}
onSubmit=()=>{
    
    this.props.authActions.register(this.state.auth);

}


    render() { 
        return (

            <div className="signup-section ">
            <h1 className="signup">Sign up/Register</h1>
            
                <div className="container"> 
                <label htmlFor="email"><b>Email</b></label>
                <input name="email" type="email" value={this.state.email}  onChange={this.onChange} placeholder="  Enter Email" required></input>
                <label htmlFor="password"><b>Password</b></label>
                <input name="password" type="password" value={this.state.password} onChange={this.onChange} placeholder="  Enter Password" required></input>
                <label htmlFor="name"><b>Name</b></label>
                <input name="name" type="name" value={this.state.name} onChange={this.onChange} placeholder="Enter Name" required></input>
                <button className="signup-btn btn" onClick={this.onSubmit} >Sign up</button>

        <div className="error-occured">
            {this.state.auth.ErrorMessage}
        </div>
                <div className="account" >
                        <p> If you have an account please
                            <NavLink to="/login"> Login </NavLink>
                        </p>
                </div>
    
                </div>
            </div>
        )
    }
}
 
export default register;


// function Login (){
//     return (

//         <div className="signup-section">
//         <h1 className="signup">Sign up/Register</h1>
        
//             <div className="container"> 
//             <label htmlFor="email"><b>Email</b></label>
//             <input name="email" type="email" placeholder="  Enter Email" required></input>
//             <label htmlFor="password"><b>Password</b></label>
//             <input name="password" type="password" placeholder="  Enter Password" required></input>
//             <label htmlFor="name"><b>Name</b></label>
//             <input name="name" type="name" placeholder="  Enter Name" required></input>
//             <button className="signup-btn btn">Sign up</button>

//             <div className="account" >
//                     <p> If you have an account please
//                         <NavLink to="/login"> Login </NavLink>
//                     </p>
//             </div>

//             </div>
//         </div>
//     )
// }
// export default Login;