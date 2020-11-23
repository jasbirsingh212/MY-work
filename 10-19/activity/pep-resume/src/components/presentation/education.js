import React from "react";
import {NavLink} from 'react-router-dom';
import {fieldCd} from './../../constants/typeCode'
import { Component } from 'react';
import ResumePreview from "./resumePreview";
class Education extends Component {
  constructor(props, context){
    super(props);
    this.state ={
      contactSection:this.props.contactSection,
      educationSection:this.props.educationSection,
      document : this.props.document
    }
  }

  onChange = (event) => {
    const val =event.target.value;
    const key= event.target.name;
    this.setState({educationSection:{...this.state.educationSection,[key]:val}});

      this.props.actions.addEducation(this.state.educationSection);
  }

  render() { 
    return ( 
      <div className="container med education">
      <div className="section funnel-section">
        <div className="form-card">        
          <h2 className="form-heading center">Educational Details</h2>
          <div className="form-section">
            <div className="input-group"><label>College Name</label>
              <div className="effect"><input  type="text" value={this.state.educationSection.SCHO} name={fieldCd.SchoolName} onChange={this.onChange} /><span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group"><label>Degree</label>
              <div className="effect"><input  type="text" value={this.state.educationSection.DGRE} name={fieldCd.Degree} onChange={this.onChange} /><span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group"><label>CGPA</label>
              <div className="effect"><input  type="text" value={this.state.educationSection.GRCG} name={fieldCd.GraduationCGPA} onChange={this.onChange} /><span></span>
              </div>
              <div className="error"></div>
            </div>
  
            <div className="input-group"><label>City/State</label>
              <div className="effect"><input type="text"  value={this.state.educationSection.CITY} name={fieldCd.City} onChange={this.onChange} /><span></span>
              </div>
              <div className="error"></div>
            </div>
          
            <div className="input-group"><label>Graduation Month</label>
              <div className="effect"><input  type="text" value={this.state.educationSection.GRDT} name={fieldCd.GraduationDate} onChange={this.onChange} /><span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group"><label>Graduation Year</label>
              <div className="effect"><input  type="text" value={this.state.educationSection.GRYR} name={fieldCd.GraduationYear} onChange={this.onChange}  /><span></span>
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
          <ResumePreview contactSection={this.state.contactSection} document={this.state.document} educationSection={this.state.educationSection}></ResumePreview>        
        </div>      
      </div>
    </div>
     );
  }
}

export default Education;