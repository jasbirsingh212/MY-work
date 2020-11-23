import initialstate from './initialstate.json';
import * as actionTypeCd from '../actions/actionTypeCodes'
import update from 'immutability-helper';

function finalizeReducer(state = initialstate, action) {
    switch (action.type) {
      
      case actionTypeCd.ADD_FINALIZE:
         return  update(state,{$set : action.payload}) 

      case actionTypeCd.ADD_FINALIZE_ERROR:
          return update(state,{$merge: {error : action.payload}})

      case actionTypeCd.UPDATE_FINALIZE:
        return {state:action.payload} 

        case actionTypeCd.UPDATE_FINALIZE_ERROR:
          return {state:action.payload}

      default:
        return state
    }
  }
export default  finalizeReducer;