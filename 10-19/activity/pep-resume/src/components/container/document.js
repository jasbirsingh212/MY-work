//import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as documentAction from  '../../actions/documentAction'; 
import GettingStarted from './../presentation/gettingStarted';

// alert("stop 1 container")

const mapStateToProps = (state) =>{ //data dera hai
    //  alert("mapStateToProps");
    //console.log(state)
     return {
        document : state.document,
        uid: state.firebase.auth.uid
      };
   }
 
   const mapDispatchToProps = (dispatch,ownProps) => {
      // alert("mapDispatchToProps")
       return {
 
             actions : bindActionCreators(documentAction,dispatch)
       }
   }
   
   export default connect(mapStateToProps,mapDispatchToProps)(GettingStarted);