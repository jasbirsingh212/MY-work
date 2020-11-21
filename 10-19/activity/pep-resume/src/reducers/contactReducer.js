import initialstate from './initialstate.json';
import * as actionTypeCd from '../actions/actionTypeCodes';

function contactReducer(state = initialstate.contactSection, action) {
    switch (action.type) {
      
      case actionTypeCd.ADD_CONTACT:
         return {...action.payload} 

      case actionTypeCd.ADD_CONTACT_ERROR:
          return {state:action.payload}

      case actionTypeCd.UPDATE_CONTACT:
        return {state:action.payload} 

        case actionTypeCd.UPDATE_CONTACT_ERROR:
          return {state:action.payload}

      default:
        return state
    }
  }
export default  contactReducer;