import React from 'react';
import skin1 from "./../../static/images/skin1.svg";
import skin2 from "./../../static/images/skin2.svg";
import skin3 from "./../../static/images/skin3.svg";
import skin4 from "./../../static/images/skin4.svg";
import skin5 from "./../../static/images/skin5.svg";
import skin6 from "./../../static/images/skin6.svg";
import skin7 from "./../../static/images/skin7.svg";
import skin8 from "./../../static/images/skin8.svg";

function templatesPage(){
    
        return ( 

            <div className='template-resume'>
            <div className = 'template'>
                <h1> Selecte  a resume template to get started</h1>
                <p>You will be able to edit  this template later !</p>
            </div>

            <div className= 'resume-templates'>
            <div class="container1">
            <img src={skin1}   className="resume-thumbnail" alt="skin1" />
            <button class="btn">Button</button>
            </div>
            <div class="container1">
            <img src={skin2}   className="resume-thumbnail" alt="skin2" />
            <button class="btn">Button</button>
            </div>

            <div class="container1">
            <img src={skin3}   className="resume-thumbnail" alt="skin3" />
            <button class="btn">Button</button>
            </div>
            <div class="container1">
            <img src={skin4}   className="resume-thumbnail" alt="skin4" />
            <button class="btn">Button</button>
            </div>
            <div class="container1">
            <img src={skin5}   className="resume-thumbnail" alt="skin5" />
            <button class="btn">Button</button>
            </div>
            <div class="container1">
            <img src={skin6}   className="resume-thumbnail" alt="skin6" />
            <button class="btn">Button</button>
            </div>
            <div class="container1">
            <img src={skin6}   className="resume-thumbnail" alt="skin6" />
            <button class="btn">Button</button>
            </div>
            <div class="container1">
            <img src={skin7}   className="resume-thumbnail" alt="skin7" />
            <button class="btn">Button</button>
            </div>
            <div class="container1">
            <img src={skin8}   className="resume-thumbnail" alt="skin8" />
            <button class="btn">Button</button>
            </div>
            </div>
            </div>
         );

}
 
export default templatesPage;