import * as actionTypeCd from './actionTypeCodes';

export const addFinalize=( )=>{
    return async(dispatch)=>{
        try{
            // db call firebase           

            // on db call success
            await dispatch({ type: actionTypeCd.ADD_FINALIZE})
        }      
        catch(err){
            await dispatch({ type: actionTypeCd.ADD_FINALIZE_ERROR })
        }
    }
}
export const updateFinalize=(documentId ,state)=>{
    return async(dispatch)=>{
        try{
            // db call 
            

            // on db call success
            await dispatch({ type: actionTypeCd.UPDATE_FINALIZE, payload: state })
        }
      
        catch(err){
            await dispatch({ type: actionTypeCd.UPDATE_FINALIZE_ERROR, payload:state })
        }
    }
}
