import * as actionTypeCd from './actionTypeCodes';
export const addEducation=(educationSection)=>{
    return async(dispatch)=>{
        try{
            // db call firebase           

            // on db call success
            await dispatch({ type: actionTypeCd.ADD_EDUCATION, payload:educationSection })
        }      
        catch(err){
            await dispatch({ type: actionTypeCd.ADD_EDUCATION_ERROR, payload:educationSection })
        }
    }
}
export const updateEducation=(documentId , educationSection)=>{
    return async(dispatch)=>{
        try{
            // db call 
            

            // on db call success
            await dispatch({ type: actionTypeCd.UPDATE_EDUCATION, payload:educationSection })
        }
      
        catch(err){
            await dispatch({ type: actionTypeCd.UPDATE_EDUCATION_ERROR, payload:educationSection })
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
