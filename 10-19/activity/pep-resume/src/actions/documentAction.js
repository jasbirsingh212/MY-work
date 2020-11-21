import * as actionTypeCd from './actionTypeCodes';
export const addDocument=(skinCd)=>{
    return async(dispatch)=>{
        try{
            // db call firebase           

            // on db call success
            await dispatch({ type: actionTypeCd.ADD_DOCUMENT, payload:skinCd })
        }      
        catch(err){
            await dispatch({ type: actionTypeCd.ADD_DOCUMENT_ERROR, payload:skinCd })
        }
    }
}
export const updateSkinCd=(documentId , skinCd)=>{
    return async(dispatch)=>{
        try{
            // db call 
            

            // on db call success
            await dispatch({ type: actionTypeCd.UPDATE_SKIN_CODE, payload:skinCd })
        }
      
        catch(err){
            await dispatch({ type: actionTypeCd.UPDATED_SKIN_CODE_ERROR, payload:skinCd })
        }
    }
}

export const incrementIfOdd = (skinCd) => {
    return (dispatch,getState) => {
        const {document} = getState();
        //console.log(document + skinCd);

        dispatch({type : actionTypeCd.ADD_DOCUMENT, payload : document});
    }
}
