import initialstate from './initialstate.json';
import * as actionTypeCd from '../actions/actionTypeCodes';
import update from 'immutability-helper';

function documentReducer(state = initialstate.document, action) {
  //  alert("in reducer");
    switch (action.type) {
      case actionTypeCd.ADD_DOCUMENT:
        return  update(state, {$set : action.payload});

      case actionTypeCd.ADD_DOCUMENT_ERROR:
        return update(state,{$merge:  action.payload});

      case actionTypeCd.UPDATE_SKIN_CODE:
        return update(state,{$merge:  action.payload});

      case actionTypeCd.UPDATE_SKIN_CODE_ERROR:
        return update(state,{$merge:  action.payload});

      default:
        return state
    }
  }
export default documentReducer ;