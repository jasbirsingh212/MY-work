import React from "react";
import { NavLink } from "react-router-dom";
import {fieldCd, skinCodes} from './../../constants/typeCode';

import ResumePreview from './resumePreview'
class Contact extends React.Component{
  constructor(props, context){
    super(props);
    this.state ={
      contactSection:this.props.contactSection,
      educationSection:this.props.educationSection,
      document : this.props.document
    }
  }

  componentDidMount() {
   
    const {document} = this.state;
 
    if(document && document.id){
        
        //console.log("component did mount")
        this.props.actions.get(document.id)
        //console.log("yes");
    }
    else{
        console.log("contact no document");
    }
}

  // componentWillReceiveProps (nextProp){
  //         console.log("next props "+nextProp)
         
        
  //     }

  onChange=(event)=>{

   
    const val =event.target.value;
    const key= event.target.name;
  
    this.setState({contactSection:{...this.state.contactSection,[key]:val}});

    if(this.state.document && this.state.document.id && this.state.contactSection.createdDate)
    {
    this.props.actions.updateContact(this.state.document.id,this.state.contactSection);
    }
    else
    {
      this.props.actions.addContact(this.state.contactSection,this.state.document.id);
    }
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
                    <div className="effect"><input  type="text" value={this.state.contactSection.FNAM} name={fieldCd.FirstName} onChange={this.onChange}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
        
                  <div className="input-group"><label>Last Name</label>
                    <div className="effect"><input type="text" value={this.state.contactSection.LNAM} name={fieldCd.LastName} onChange={this.onChange}  /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                  <div className="input-group full"><label>Professional Summary</label>
                    <div className="effect"><input type="text" value={this.state.contactSection.PRSU} name={fieldCd.ProfSummary} onChange={this.onChange}  /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
                
                  <div className="input-group"><label>Email</label>
                    <div className="effect"><input  type="text" value={this.state.contactSection.EMAI}  name={fieldCd.Email} onChange={this.onChange}   /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                  <div className="input-group"><label>Phone</label>
                    <div className="effect"><input  type="text" value={this.state.contactSection.PHON} name={fieldCd.Phone} onChange={this.onChange}   /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
        
                  <div className="input-group"><label>Profession</label>
                    <div className="effect"><input type="text"  value={this.state.contactSection.PROF} name={fieldCd.Profession} onChange={this.onChange}  /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
                  <div className="input-group"><label>Street</label>
                    <div className="effect"><input  type="text" value={this.state.contactSection.STRT} name={fieldCd.Street} onChange={this.onChange} /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                  <div className="input-group"><label>City</label>
                    <div className="effect"><input  type="text" value={this.state.contactSection.CITY} name={fieldCd.City} onChange={this.onChange}   /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
        
                  <div className="input-group"><label>State</label>
                    <div className="effect"><input type="text" value={this.state.contactSection.STAT} name={fieldCd.State} onChange={this.onChange}  /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                
                  <div className="input-group"><label>Country</label>
                    <div className="effect"><input type="text" value={this.state.contactSection.CNTY} name={fieldCd.Country} onChange={this.onChange} /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
                  <div className="input-group"><label>Pin Code</label>
                    <div className="effect"><input type="text" value={this.state.contactSection.ZIPC} name={fieldCd.ZipCode} onChange={this.onChange}  /><span></span>
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
              <ResumePreview contactSection={this.state.contactSection} document={this.state.document} educationSection={this.state.educationSection} ></ResumePreview>     
              </div>        
             
            </div>
          </div>
            );
        }
}

export default Contact;

// const mapStateToProps = (state) =>{
//   return {contactSection : state.contactSection};
// }

// const mapDispatchtoProps = (dispatch) => {
// return {
//     actions : bindActionCreators(contactAction,dispatch)
//   }
// }

// export default connect(mapStateToProps,mapDispatchtoProps)(Contact);