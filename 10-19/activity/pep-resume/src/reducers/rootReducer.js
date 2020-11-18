import initialstate from './initialstate.json'
import * as actionType from '../actions/actionType'
function rootReducer(state=initialstate, action){
    switch (action.type) {
        case actionType.setSkinCd:
            return {...state,skinCodes:{skinCd : action.payload}};
        case actionType.addContact:
                return {...state,contactSection:action.payload};
        default:
            return state  
    }

}
export default rootReducer;