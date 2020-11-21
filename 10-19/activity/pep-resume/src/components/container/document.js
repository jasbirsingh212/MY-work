import React,{Component} from 'react';
import {connect} from 'react-redux';
import {skinCodes} from '../../constants/typeCode';
import * as actionTypeCd from '../../actions/actionTypeCodes';
import {NavLink} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as documentAction from  '../../actions/documentAction'; 
import GettingStarted from './../presentation/gettingStarted';


const mapStateToProps = (state) =>{ //data dera hai
    // alert("mapStateToProps");
    //console.log(state)
     return {document : state.document};
   }
 
   const mapDispatchToProps = (dispatch,ownProps) => {
      // alert("mapDispatchToProps")
       return {
 
             actions : bindActionCreators(documentAction,dispatch)
       }
   }
   
   export default connect(mapStateToProps,mapDispatchToProps)(GettingStarted);