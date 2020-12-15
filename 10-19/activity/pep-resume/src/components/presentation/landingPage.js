import React ,{Component} from 'react';
import logo from "../../static/images/resume.png";
import { NavLink } from "react-router-dom";


class Lp extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div className="container  lp-page center">          
          <div className="section">
     <h1>Create a resume that stands out</h1>
       <p >Create a Resume that perfectally describes your skils and match job profile.</p>
        <br></br>
       <div >
            <NavLink to="/getting-started"  className="btn hvr-float-shadow"><span>Get Started for Free</span>
            </NavLink>
            
            </div>
            <img src={logo}   className="lp-resume" alt="logo" />
     </div>        
     </div> );
  }
}
 
export default Lp;



// const Lp = () => {
//     return (    
    
//         <div className="container  lp-page center">          
//         <div className="section">
//          <h1>Create a resume that stands out</h1>
//            <p >Create a Resume that perfectally describes your skils and match job profile.</p>
//             <br></br>
//            <div >
//                 <NavLink to="/getting-started"  className="btn hvr-float-shadow"><span>Get Started for Free</span>
//                 </NavLink>
                
//                 </div>
//                 <img src={logo}   className="lp-resume" alt="logo" />
//          </div>        
//          </div>
    
//         );
// }
 
// export default Lp;