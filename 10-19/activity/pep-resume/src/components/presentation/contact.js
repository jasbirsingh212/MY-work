import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {fieldCd, skinCodes} from './../../constants/typeCode'
import * as actionTypeCd from '../../actions/actionType';
import ResumePreview from './resumePreview'
class Contact extends React.Component{
  constructor(props, context){
    super(props);
    this.state ={
      contactSection:this.props.contactSection,
      educationSection:{},
      skinCodes : this.props.skinCodes
    }
  }

  componentWillReceiveProps (nextProp){
          console.log(nextProp)
         
        
      }

  onChange=(event)=>{

    this.props.setcontact(this.state.contactSection);
    const val =event.target.value;
    const key= event.target.name;
  
    this.setState({contactSection:{...this.state.contactSection,[key]:val}});
   
  }

render()  {

      //console.log(this.state.contactSection)
        return (    
            <div className="container med contact">
            <div className="section funnel-section">
              <div className="form-card">        
                <h2 className="form-heading center">Personal Details</h2>
                <div className="form-section">
                  <div className="input-group"><label>First Name</label>
                    <div className="effect"><input  type="text" name={fieldCd.FirstName} onChange={this.onChange}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
        
                  <div className="input-group"><label>Last Name</label>
                    <div className="effect"><input type="text" name={fieldCd.LastName} onChange={this.onChange}  /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                  <div className="input-group full"><label>Professional Summary</label>
                    <div className="effect"><input type="text" name={fieldCd.ProfSummary} onChange={this.onChange}  /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
                
                  <div className="input-group"><label>Email</label>
                    <div className="effect"><input  type="text"  name={fieldCd.Email} onChange={this.onChange}   /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                  <div className="input-group"><label>Phone</label>
                    <div className="effect"><input  type="text"  name={fieldCd.Phone} onChange={this.onChange}   /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
        
                  <div className="input-group"><label>Profession</label>
                    <div className="effect"><input type="text"  name={fieldCd.Profession} onChange={this.onChange}  /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
                  <div className="input-group"><label>Street</label>
                    <div className="effect"><input  type="text"  name={fieldCd.Street} onChange={this.onChange} /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                  <div className="input-group"><label>City</label>
                    <div className="effect"><input  type="text" name={fieldCd.City} onChange={this.onChange}   /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
        
                  <div className="input-group"><label>State</label>
                    <div className="effect"><input type="text" name={fieldCd.State} onChange={this.onChange}  /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                
                  <div className="input-group"><label>Country</label>
                    <div className="effect"><input type="text" name={fieldCd.Country} onChange={this.onChange} /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
                  <div className="input-group"><label>Pin Code</label>
                    <div className="effect"><input type="text" name={fieldCd.ZipCode} onChange={this.onChange}  /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>


                  <div className="form-buttons">
                  <NavLink to='/education' className="btn hvr-float-shadow">
                    <span >Next</span>
                  </NavLink>
            
                    <NavLink to='/getting-started' className="center">Back</NavLink>
                </div>
                </div>
              </div>
              <div className="preview-card">   
              <ResumePreview contactSection={this.state.contactSection} educationSection={this.state.educationSection} ></ResumePreview>     
              </div>        
             
            </div>
          </div>
            );
        }
}

const mapStateToProps = (state) =>{
  return state;
}

const mapDispatchtoProps = (dispatch) => {
return {
  setcontact : (contactSection) => dispatch({type:actionTypeCd.addContact, payload:{contactSection}})
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Contact);