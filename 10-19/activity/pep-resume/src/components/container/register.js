import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions';
import register from '../presentation/register'


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
  
export default connect(mapStateToProps,mapDispatchToProps)(register)