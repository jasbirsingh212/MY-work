import * as actionTypeCd from './actionTypeCodes';
//import  uuid from 'react-uuid';

export const addContact=(contactSection,id)=>{
    return async(dispatch,getState,{getFirebase,getFirestore})=>{
        try{
            // db call firebase   
            let fireStore=getFirestore();
            //let id = uuid();
            // let doc = {
            //      contactSection,
            //     "createdDate" : new Date()
            // }
            contactSection.createdDate= new Date();
            fireStore.collection('resumes').doc(id).set({contactSection },{merge :true})
            await dispatch({ type: actionTypeCd.ADD_CONTACT, payload: contactSection})
        }      
        catch(err){
            await dispatch({ type: actionTypeCd.ADD_CONTACT_ERROR, payload:contactSection })
        }
    }
}
export const updateContact=(documentId , contactSection)=>{
    return async(dispatch,getState,{getFirebase,getFirestore})=>{
        try{
            // db call 
            let fireStore=getFirestore();
            //let id = uuid();
            // let doc = {
            //      contactSection,
            //     "createdDate" : new Date()
            // }
            contactSection.modifiedDate= new Date ();
            fireStore.collection('resumes').doc(documentId).set({contactSection},{merge :true})
            

            // on db call success
            await dispatch({ type: actionTypeCd.UPDATE_CONTACT, payload: contactSection })
        }
      
        catch(err){
            await dispatch({ type: actionTypeCd.UPDATE_CONTACT_ERROR, payload:contactSection })
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
                    doc1=doc.data().contactSection;
                    if(doc1)
                    console.log("this is contact :",doc1)
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            }); 

            await dispatch({ type: actionTypeCd.UPDATE_CONTACT, payload:doc1})
        }
        catch(error){
           // await dispatch({ type: actionTypeCd.UPDATE_SKIN_CODE_ERROR, payload:error })
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
