import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as contactAction from  '../../actions/contactAction'; 
import Contact from './../presentation/contact'

const mapStateToProps = (state) =>{
    return {
      contactSection : state.contactSection,
      document : state.document
    };
  }
  
  const mapDispatchtoProps = (dispatch) => {
  return {
      actions : bindActionCreators(contactAction,dispatch)
    }
  }
  
  export default connect(mapStateToProps,mapDispatchtoProps)(Contact);
