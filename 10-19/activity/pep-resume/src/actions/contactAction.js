import * as actionTypeCd from './actionTypeCodes';

export const addContact=(contactSection)=>{
    return async(dispatch)=>{
        try{
            // db call firebase           

            // on db call success
            await dispatch({ type: actionTypeCd.ADD_CONTACT, payload: contactSection})
        }      
        catch(err){
            await dispatch({ type: actionTypeCd.ADD_CONTACT_ERROR, payload:contactSection })
        }
    }
}
export const updateContact=(documentId , contactSection)=>{
    return async(dispatch)=>{
        try{
            // db call 
            

            // on db call success
            await dispatch({ type: actionTypeCd.UPDATE_CONTACT, payload: contactSection })
        }
      
        catch(err){
            await dispatch({ type: actionTypeCd.UPDATE_CONTACT_ERROR, payload:contactSection })
        }
    }
}

// export const incrementIfOdd = (skinCd) => {
//     return (dispatch,getState) => {
//         const {document} = getState();
//         //console.log(document + skinCd);

//         dispatch({type : actionTypeCd.ADD_DOCUMENT, payload : document});
//     }
// }
