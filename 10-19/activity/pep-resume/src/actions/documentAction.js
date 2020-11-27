import * as actionTypeCd from './actionTypeCodes';
import  uuid from 'react-uuid';

export const addDocument=(skinCd)=>{
    return async(dispatch,getState,{getFirebase,getFirestore})=>{
        try{
            // db call firebase   
            let fireStore=getFirestore();
            let id = uuid();
            let doc = {
                id  : id,
                "skinCd" : skinCd,
                "createdDate" : new Date()
            }
            fireStore.collection('resumes').doc(id).set({"document" : doc})

            // on db call success
            // alert("in action");
            await dispatch({ type: actionTypeCd.ADD_DOCUMENT, payload:doc })
        }      
        catch(error){
            await dispatch({ type: actionTypeCd.ADD_DOCUMENT_ERROR, payload:error })
        }
    }
}
export const updateSkinCd=(documentId , skinCd)=>{
    return async(dispatch,getState,{getFirebase,getFirestore})=>{
        try{
            // db call firebase   
            let firebStore=getFirestore();
          
            let doc = {
                "skinCd" : skinCd,
                "modifiedDate" : new Date()
            }
            firebStore.collection('resumes').doc(documentId).set({"document" : doc},{merge : true})

            await dispatch({ type: actionTypeCd.UPDATE_SKIN_CODE, payload:doc })
        }
      
        catch(error){
            await dispatch({ type: actionTypeCd.UPDATE_SKIN_CODE_ERROR, payload:error })
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
