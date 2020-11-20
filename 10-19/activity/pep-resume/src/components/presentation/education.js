import React from "react";
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';
import {fieldCd} from './../../constants/typeCode'
import { Component } from 'react';
import ResumePreview from "./resumePreview";
import * as actionTypeCd from '../../actions/actionType';
class Education extends Component {
  constructor(props, context){
    super(props);
    this.state ={
      contactSection:this.props.contactSection,
      educationSection:this.props.educationSection,
      skinCodes : this.props.skinCodes
    }
  }

  onChange = () => {

      this.props.seteducation(this.state.educationSection);
  }

  render() { 
    return ( 
      <div className="container med education">
      <div className="section funnel-section">
        <div className="form-card">        
          <h2 className="form-heading center">Educational Details</h2>
          <div className="form-section">
            <div className="input-group"><label>College Name</label>
              <div className="effect"><input  type="text"  name={fieldCd.SchoolName} onChange={this.onChange} /><span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group"><label>Degree</label>
              <div className="effect"><input  type="text"  name={fieldCd.Degree} onChange={this.onChange} /><span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group"><label>CGPA</label>
              <div className="effect"><input  type="text" name={fieldCd.GraduationCGPA} onChange={this.onChange} /><span></span>
              </div>
              <div className="error"></div>
            </div>
  
            <div className="input-group"><label>City/State</label>
              <div className="effect"><input type="text"  name={fieldCd.City} onChange={this.onChange} /><span></span>
              </div>
              <div className="error"></div>
            </div>
          
            <div className="input-group"><label>Graduation Month</label>
              <div className="effect"><input  type="text" name={fieldCd.GraduationDate} onChange={this.onChange} /><span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group"><label>Graduation Year</label>
              <div className="effect"><input  type="text"  name={fieldCd.GraduationYear} onChange={this.onChange}  /><span></span>
              </div>
              <div className="error"></div>
            </div>      

            <div className="form-buttons">
              <NavLink to = "/finalize" className="btn hvr-float-shadow">
              <span>Next</span>
              </NavLink>
              <NavLink to='/contact' className="center">Back</NavLink>
          </div>
          </div>            
        </div>
        <div className="preview-card">
          <ResumePreview contactSection={this.state.contactSection} skinCd={this.state.skinCodes} educationSection={this.state.educationSection}></ResumePreview>        
        </div>      
      </div>
    </div>
     );
  }
}
const mapStateToProps = (state) =>{
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    seteducation : (educationSection) => dispatch({type : actionTypeCd.addEducation, payload : {educationSection}})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Education);