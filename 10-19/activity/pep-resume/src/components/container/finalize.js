import React, { Component } from 'react';
import { connect } from "react-redux";
import Finalize from './../presentation/finalize';
import * as finalizeAction from '../../actions/finalizeAction';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) =>{
    return {
        contactSection : state.contactSection,
        educationSection : state.educationSection,
        document : state.document
    };
  }
  
const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(finalizeAction,dispatch)
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(Finalize);