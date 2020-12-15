import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions';
import signin from '../presentation/signin'


const mapStateToProps=(state)=>{
    return {
        fbData: state.firebase.auth,
        auth:state.auth
    }
  }  
  
  const mapDispatchToProps=(dispatch)=>{
    return{
       authActions:bindActionCreators(authActions, dispatch)
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(signin)