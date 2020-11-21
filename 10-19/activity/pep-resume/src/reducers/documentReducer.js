import initialstate from './initialstate.json';
import * as actionTypeCd from '../actions/actionTypeCodes';

function documentReducer(state = initialstate.document, action) {
    switch (action.type) {
      case actionTypeCd.ADD_DOCUMENT:
        return {state  : action.payload};

      case actionTypeCd.ADD_DOCUMENT_ERROR:
        return {state : action.payload};

      case actionTypeCd.UPDATE_SKIN_CODE:
        return {state : action.payload};

      case actionTypeCd.UPDATED_SKIN_CODE_ERROR:
        return {state : action.payload};

      default:
        return state
    }
  }
export default documentReducer ;