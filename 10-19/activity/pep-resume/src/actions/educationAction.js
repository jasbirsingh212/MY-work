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

// export const incrementIfOdd = (skinCd) => {
//     return (dispatch,getState) => {
//         const {document} = getState();
//         //console.log(document + skinCd);

//         dispatch({type : actionTypeCd.ADD_DOCUMENT, payload : document});
//     }
// }
