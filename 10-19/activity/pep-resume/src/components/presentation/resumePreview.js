import React from 'react';
class ResumePreview extends React.PureComponent{
    
    
    render() {     
        return (

            <div>
            <div className="skin1 resume-preview hide">
                {/* <p> Resume Preview</p> */}

                <div className="head">
                <div className="Name">
                <h1>{this.props.contactSection.FNAM} {this.props.contactSection.LNAM}</h1>
                </div>
                <p className="contact" >{this.props.contactSection.EMAI} | {this.props.contactSection.PHON}</p>
                <p className="address">{this.props.contactSection.STRT} {this.props.contactSection.CITY} {this.props.contactSection.STAT} {this.props.contactSection.ZIPC}</p>
                </div>
                <div className="Professional">
                <h2>Professional Summary</h2>
                <hr/>
                <p>{this.props.contactSection.PRSU} {this.props.contactSection.PROF}</p>
                </div>

                <div className="Education-section">
                    <h2>Education</h2>
                    <hr/>
                    <p className="">{this.props.educationSection.DGRE} (CGPA:{this.props.educationSection.GRCG})</p>
                    <p>{this.props.educationSection.SCHO} {this.props.educationSection.CITY} | {this.props.educationSection.GRDT} {this.props.educationSection.GRYR}</p>
                </div>

                <div className="Education-section">
                    <h2>Skils</h2>
                    <hr/>
                </div>
            </div>
            <div className="skin2 resume-preview ">
            {/* <p> Resume Preview</p> */}

            <div className="head">
            <div className="Name">
            <h1>{this.props.contactSection.FNAM} {this.props.contactSection.LNAM}</h1>
            </div>
            <p className="contact" >{this.props.contactSection.EMAI} | {this.props.contactSection.PHON}</p>
            <p className="address">{this.props.contactSection.STRT} {this.props.contactSection.CITY} {this.props.contactSection.STAT} {this.props.contactSection.ZIPC}</p>
            </div>
            <div className="Professional">
            <h2>Professional Summary</h2>
            <hr/>
            <p>{this.props.contactSection.PRSU} {this.props.contactSection.PROF}</p>
            </div>

            <div className="Education-section">
                <h2>Education</h2>
                <hr/>
                <p>{this.props.educationSection.DGRE} (CGPA : {this.props.educationSection.GRCG})</p>
                <p>{this.props.educationSection.SCHO} {this.props.educationSection.CITY} | {this.props.educationSection.GRDT} {this.props.educationSection.GRYR}</p>
            </div>

            <div className="Education-section">
                <h2>Skils</h2>
                <hr/>
            </div>
        </div>
        </div> 
        )
    }
}
 
export default ResumePreview;