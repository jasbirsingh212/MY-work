import React,{Component} from 'react';
import {connect} from 'react-redux';
import {skinCodes} from '../../constants/typeCode';
import * as actionTypeCd from '../../actions/actionType';
import {NavLink} from 'react-router-dom';
class GettingStarted  extends Component {
    constructor(props, context){
        super(props);
        this.state ={
           skinCodes : this.props.skinCodes
        }; 
      }

    //   componentWillReceiveProps (nextProp){
    //       console.log(nextProp.skinCodes)
    //     this.setState({skinCodes : nextProp.skinCodes})
    //   }

     onClick = (skinCd ) => {
        // console.log(event);
        // this.props.setSkinCd(event.);
        // let i =event.target.id.charAt(3);
        // this.setState({
        //     skinCodes : "myCheckbox"+i
        // }) 
        this.props.setSkinCd(skinCd);                                                                  
     };

    render() { 

        console.log(this.state.skinCodes)
        return (  
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value) => { 
                            let i=value.charAt(4);  
                            return( <div className = { (value == this.state.skinCodes ? "selected ": "")+"template-card rounded-border"}>
                                  {/* <i className="hide" ></i> */}
                                <input type="checkbox" id={"myCheckbox"+i} checked={this.state.skinCodes.skinCd.value==("skin"+i)?true:false} />
                                <label htmlFor={"myCheckbox"+i}>
                                <img  className='' src={"./../images/" + value + ".svg"}/>
                                </label>
                                <NavLink to="/contact">
                                <button type="button"   className='btn-select-theme' id={"btn"+i} onClick={() => this.onClick(value)}>USE TEMPLATE</button>
                                </NavLink>
                                {/* <button type="button"   className='btn-select-theme'>USE TEMPLATE</button> */}
                            </div>);
                            
                        })
                    }
                    </div>
                
                </div>
            </div>
        );
    }
}
 
const mapStateToProps = (state) =>{
    return state;
  }

  const mapDispatchToProps = (dispatch,ownProps) => {
      console.log(ownProps)
      return {
        setSkinCd : (value) => dispatch ({type : actionTypeCd.setSkinCd , payload : {value}})
      }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(GettingStarted);