import initialstate from './initialstate.json';
import * as actionTypeCd from '../actions/actionTypeCodes';
import update from 'immutability-helper';

function documentReducer(state = initialstate.document, action) {
  //  alert("in reducer");
    switch (action.type) {
      case actionTypeCd.ADD_DOCUMENT:
        return  update(state,{skinCd : {$set : action.payload}});

      case actionTypeCd.ADD_DOCUMENT_ERROR:
        return update(state,{$merge: {error : action.payload}})

      case actionTypeCd.UPDATE_SKIN_CODE:
        return {state : action.payload};

      case actionTypeCd.UPDATED_SKIN_CODE_ERROR:
        return {state : action.payload};

      default:
        return state
    }
  }
export default documentReducer ;