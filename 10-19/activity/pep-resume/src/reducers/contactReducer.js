import initialstate from './initialstate.json';
import * as actionTypeCd from '../actions/actionTypeCodes'
import update from 'immutability-helper';

function contactReducer(state = initialstate.contactSection, action) {
    switch (action.type) {
      
      case actionTypeCd.ADD_CONTACT:
         return  update(...state,{$set : action.payload}) 

      case actionTypeCd.ADD_CONTACT_ERROR:
          return update(state,{$merge:  action.payload});

      case actionTypeCd.UPDATE_CONTACT:
        return update(...state,{$merge:  action.payload});

        case actionTypeCd.UPDATE_CONTACT_ERROR:
          return update(state,{$merge:  action.payload});

      default:
        return state
    }
  }
export default  contactReducer;