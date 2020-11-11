import React from 'react';

class ResumePreview extends React.PureComponent{
    
    render() {     
        
        return (
            <div className="resume-preview">
                {/* <p> Resume Preview</p> */}
                <div className="Name" align="center">
                <h1>{this.props.contactSection.FNAM} {this.props.contactSection.LNAM}</h1>
                </div>
                <div className="Professional">
                <h3>Professional Summary</h3>
                <p>{this.props.contactSection.PRSU} {this.props.contactSection.PROF}</p>
                </div>
                <div className="contact">
                    <h3>contact</h3>
                     <p>Email:{this.props.contactSection.EMAI} Phone:{this.props.contactSection.PHON}</p>
                </div>
                <div className="address">
                    <h3>Address</h3>
                    <p>{this.props.contactSection.STRT} {this.props.contactSection.CITY} {this.props.contactSection.ZIPC}</p>
                </div>
            </div>
        )
    }
}
 
export default ResumePreview;