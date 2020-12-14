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

export const get=(documentId)=>{
    return async(dispatch,getState,{getFirebase,getFirestore})=>{
        try{
            // db call firebase   
            let firebStore=getFirestore();
            let firebase=getFirebase();
            let doc1={}
            firebStore.collection('resumes').doc(documentId).get().then(function(doc) {
                if (doc.exists) {
                    //console.log("Document data:", doc.data());
                    doc1=doc.data().document;
                    console.log("this is doc1 :",doc1)
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            }); 

            await dispatch({ type: actionTypeCd.UPDATE_SKIN_CODE, payload:doc1})
        }
        catch(error){
           // await dispatch({ type: actionTypeCd.UPDATE_SKIN_CODE_ERROR, payload:error })
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
