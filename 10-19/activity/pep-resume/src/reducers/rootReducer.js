import initialstate from './initialstate.json';
import * as actionTypeCd from '../actions/actionTypeCodes';
import {combineReducers} from 'redux';
import documentReducer from './documentReducer'
import contactReducer from './contactReducer'
import educationReducer from './educationReducer'

export default combineReducers({
  document : documentReducer,
 contactSection : contactReducer,
  educationSection : educationReducer
})

//export default rootReducer ;