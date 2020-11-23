
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as educationAction from  '../../actions/educationAction';
import Education from './../presentation/education'

const mapStateToProps = (state) =>{
    return {
      educationSection : state.educationSection,
      contactSection : state.contactSection,
      document : state.document
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      actions : bindActionCreators(educationAction,dispatch)
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Education);