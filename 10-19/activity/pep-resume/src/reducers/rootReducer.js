
import {combineReducers} from 'redux';
import documentReducer from './documentReducer'
import contactReducer from './contactReducer'
import educationReducer from './educationReducer';
import authReducer from './authReducer'
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  document : documentReducer,
 contactSection : contactReducer,
  educationSection : educationReducer,
  firebase:firebaseReducer,
  auth:authReducer
})

//export default rootReducer ;