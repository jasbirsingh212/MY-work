import React, { Component } from 'react';
import GettingStarted from './gettingStarted';
import {skinCodes} from '../../constants/typeCode';
import {NavLink} from 'react-router-dom';
import ResumePreview from './resumePreview';
import { connect } from "react-redux";
class finalize extends Component {
    constructor(props, context){
        super(props);
        this.state ={
          contactSection:this.props.contactSection,
          educationSection:this.props.educationSection,
          skinCodes : this.props.skinCodes
        }
    }
    
    render() { 
        return ( 

            <div className="finalize-section">
            <div className="finalize">
            <div className="preview-card"> 
            <ResumePreview contactSection={this.state.contactSection} educationSection={this.state.educationSection}></ResumePreview>
            </div>
            <div className="properties  preview-card">
                <div className="download">
                <h2>Download Resume as a PDF</h2>
                <p>Click here to Download</p>
                </div>
                <hr/>
                <div className="change-font-family">
                <h2>Change Font Family</h2>
                <span className="firstff">Josefin</span>
                <span className="secondff">Roboto</span>
                <span className="third">Montserrat</span>
                </div>
                <hr/>
                <div className="change-font-size">
                <h2>Change Font Size</h2>
                <span className="firstfs">Small</span>
                <span className="secondfs">Medium</span>
                <span className="thirdfs">Large</span>
                </div>
                <hr/>
                <div className="change-color">
                    <h2>Change Color</h2>
                    <span class="dot first"></span>
                    <span class="dot second"></span>
                    <span class="dot third"></span>
                </div>
                <hr/>
                <div className="change-template">
                <h2>Change Template</h2>
                <button className="btn btn-select-theme" onClick={this.onClick}>Change Template</button>
                </div>
            </div>
            </div>
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center hide">
                    Select a resume template to get started</h1>
                    <p className=" center hide">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value) => { 
                            let i=value.charAt(4);  
                            return( <div className="template-card rounded-border">
                                  {/* <i className="hide" ></i> */}
                                <input type="checkbox" id={"myCheckbox"+i} checked={this.state.skinCodes.skin1==("myCheckbox"+i)?"true":false} />
                                <label htmlFor={"myCheckbox"+i}>
                                <img  className='' src={"./../images/" + value + ".svg"}/>
                                </label>
                                {/* <button type="button"   className='btn-select-theme'>USE TEMPLATE</button> */}
                            </div>);
                            
                        })
                    }
                    </div>
                
                </div>
            </div>
        </div>
         );
    }
}
 
const mapStateToProps = (state) =>{
    return state;
  }
  export default connect(mapStateToProps,null)(finalize);