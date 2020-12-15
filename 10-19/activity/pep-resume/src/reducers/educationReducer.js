import initialstate from './initialstate.json';
import * as actionTypeCd from '../actions/actionTypeCodes';
import update from "immutability-helper"
function educationReducer(state = initialstate.educationSection, action) {
    switch (action.type) {
      
      case actionTypeCd.ADD_EDUCATION:
         return update(state , {$set : action.payload})

      case actionTypeCd.ADD_EDUCATION_ERROR:
          return update(state,{$merge:  action.payload});

      case actionTypeCd.UPDATE_EDUCATION:
            return update(state,{$merge:  action.payload});
      
     case actionTypeCd.UPDATE_EDUCATION_ERROR:
            return update(state,{$merge:  action.payload});
          

      default:
        return state;
    }
  }
export default  educationReducer;