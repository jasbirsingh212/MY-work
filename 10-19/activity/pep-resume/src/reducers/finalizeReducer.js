import initialstate from './initialstate.json';
import * as actionTypeCd from '../actions/actionTypeCodes'
import update from 'immutability-helper';

function finalizeReducer(state = initialstate.document, action) {
    switch (action.type) {
      
          case actionTypeCd.UPDATE_SKIN_CODE:
            return update(state,{$merge:  action.payload});
    
          case actionTypeCd.UPDATE_SKIN_CODE_ERROR:
            return update(state,{$merge:  action.payload});

      default:
        return state
    }
  }
export default  finalizeReducer;