import React,{Component} from 'react';
import {skinCodes} from '../../constants/typeCode';
import {NavLink} from 'react-router-dom'; 

// alert("stop 2 component")
class GettingStarted  extends Component {
    constructor(props, context){
        super(props);
        this.state ={
           document : this.props.document,
           auth : this.props.auth
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
       // alert(skinCd)
        //this.props.setSkinCd(skinCd);
        //alert("on click");
        // this.setState({
        //     document : this.props.document
        // })
        if(this.props.document && this.props.document.id){
                this.props.actions.updateSkinCd(this.props.document.id,skinCd);
        }
        else{

            this.props.actions.addDocument(skinCd);
        }
        // this.props.actions.addDocument(skinCd);
        //this.props.actions.incrementIfOdd(skinCd);                                                               
     };

    render() { 

        console.log(this.state);
        //console.log(this.state.auth);

        //console.log(this.state.document)
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
                             return( <div className = "template-card rounded-border">
                                  {/* <i className="hide" ></i> */}
                                <input type="checkbox" id={"myCheckbox"+i}  defaultChecked={(this.state.document.skinCd == "skin"+i) ? true : false}/>
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

export default GettingStarted;
 
// const mapStateToProps = (state) =>{ //data dera hai
//    // alert("mapStateToProps");
//    //console.log(state)
//     return {document : state.document};
//   }

//   const mapDispatchToProps = (dispatch,ownProps) => {
//      // alert("mapDispatchToProps")
//       return {

//             actions : bindActionCreators(documentAction,dispatch)
//       }
//   }
  
//   export default connect(mapStateToProps,mapDispatchToProps)(GettingStarted);