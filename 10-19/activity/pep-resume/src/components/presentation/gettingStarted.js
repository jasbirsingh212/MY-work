import React,{Component} from 'react';
import {skinCodes} from '../../constants/typeCode';
import {NavLink} from 'react-router-dom'; 
import SigninErr from './signinErr';
// alert("stop 2 component")
class GettingStarted  extends Component {
    constructor(props, context){
        super(props);
        this.state ={
           document : this.props.document,
            uid : this.props.uid
        }; 
      }

    //   componentWillReceiveProps (nextProp){
    //       console.log(nextProp.skinCodes)
    //     this.setState({skinCodes : nextProp.skinCodes})
    //   }

    //   componentDidMount(){
    //       const {uid ,document} = this.state;
    //       if(uid && document && document.id)
    //       {
    //         //  axios.get('https://jsonplaceholder.typicode.com/posts').
    //         //  then((res) => {
    //         //     console.log("jasbir")
    //         //  }).catch((err) => {
    //         //         ("jasbir1");
    //         //  })

    //        }
    // }


    componentDidMount() {
   
        const {uid ,document} = this.state;
        
        if(uid && document && document.id /*&& document.skinCd !=*/ ){
            
            //console.log("component did mount")
            this.props.actions.get(document.id)
           // console.log(this.state.document.skinCd);
            //console.log("yes");
        }
        else{
            console.log("gettingStarted no document");
        }
   }
  



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

        const {uid}= this.state
        
        if(!uid)
        {
            return (
                <SigninErr></SigninErr>
            )
        }
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
                             return( <div className = "template-card rounded-border zoom">
                                  {/* <i className="hide" ></i> */}
                                <input type="checkbox" id={"myCheckbox"+i}  defaultChecked={(this.state.document.skinCd == "skin"+i) ? true : false}/>
                                <label htmlFor={"myCheckbox"+i}>
                                <img  className="" src={"./../images/" + value + ".svg"}/>
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
