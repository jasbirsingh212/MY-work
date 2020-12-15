import * as actionTypeCd from './actionTypeCodes';
export const addEducation=(id,educationSection)=>{
    return async(dispatch,getState,{getFirebase,getFirestore})=>{
        try{
            // db call firebase           
            let fireStore=getFirestore();
            // on db call success
            educationSection.createdDate= new Date();
            fireStore.collection('resumes').doc(id).set({educationSection },{merge :true})
            await dispatch({ type: actionTypeCd.ADD_EDUCATION, payload:educationSection })
        }      
        catch(err){
            await dispatch({ type: actionTypeCd.ADD_EDUCATION_ERROR, payload:err })
        }
    }
}

export const updateEducation=(documentId , educationSection)=>{
    return async(dispatch,getState,{getFirebase,getFirestore})=>{
        try{
            // db call firebase           
            let fireStore=getFirestore();
            // on db call success
            educationSection.modifiedDate= new Date();
            fireStore.collection('resumes').doc(documentId).set({educationSection },{merge :true})
            await dispatch({ type: actionTypeCd.UPDATE_EDUCATION, payload:educationSection })
        }
      
        catch(err){
            await dispatch({ type: actionTypeCd.UPDATE_EDUCATION_ERROR, payload:err })
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
                    doc1=doc.data().educationSection;
                    if(doc1)
                    console.log("this is education :",doc1)
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            }); 

            await dispatch({ type: actionTypeCd.UPDATE_EDUCATION, payload:doc1})
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
