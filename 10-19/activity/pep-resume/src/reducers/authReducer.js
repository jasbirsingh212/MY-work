import initialstate from './initialstate.json';
import * as actionTypes from '../actions/actionTypeCodes';
import update from 'immutability-helper';


export default function authReducer(state= initialstate.auth, action){
    switch(action.type){
        case actionTypes.SIGN_IN:
           return  update(state,{ErrorMessage:{$set:''}}); 
        case actionTypes.SIGN_IN_FAILED:
           return  update(state,{ErrorMessage:{$set:action.error}});
        case actionTypes.REGISTER:
            return  update(state,{ErrorMessage:{$set:''}}); 
        case actionTypes.REGISTER_FAILED:
            return  update(state,{ErrorMessage:{$set:action.error}});
        // case actionTypes.SIGN_OUT:
        //     return update(state,{$set :""})
        case actionTypes.SIGN_OUT_FAILED:
                return update(state,{ErrorMessage:{$set:action.error}})
        default:
            return state;
        
    }
}