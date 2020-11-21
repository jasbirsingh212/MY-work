import initialstate from './initialstate.json';
import * as actionTypeCd from '../actions/actionTypeCodes';

function educationReducer(state = initialstate.educationSection, action) {
    switch (action.type) {
      
      case actionTypeCd.ADD_EDUCATION:
         return {state:action.payload} 

      case actionTypeCd.ADD_EDUCATION_ERROR:
          return {state:action.payload}

      case actionTypeCd.UPDATE_EDUCATION:
            return {state:action.payload}
      
     case actionTypeCd.UPDATE_EDUCATION_ERROR:
            return {state:action.payload}
          

      default:
        return state
    }
  }
export default  educationReducer;