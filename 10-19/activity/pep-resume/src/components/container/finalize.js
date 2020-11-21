import React, { Component } from 'react';
import {skinCodes} from '../../constants/typeCode';
import { connect } from "react-redux";
import finalize from './../presentation/finalize';

const mapStateToProps = (state) =>{
    return {
        contactSection : state.contactSection,
        educationSection : state.educationSection,
        document : state.document
    };
  }


const mapDispatchToProps = () => {

}


  export default connect(mapStateToProps,mapDispatchToProps)(finalize);