import * as actionTypes from './actionTypeCodes';


export const signIn=(userData)=>{

    return  (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            userData.email,
            userData.password
        ).then(() => {
            dispatch({type: actionTypes.SIGN_IN})
            return;
        }).catch((err) => {
            let message="error in authentication user"
            if(err.code=='auth/user-not-found'){
                message="User not found"
            }
            if(err.code=='auth/wrong-password'){
                message="Incorrect password"
            }
            dispatch({type: actionTypes.SIGN_IN_FAILED,error:message})
        });
    }
}



export const signOut=()=>{

    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({type: actionTypes.SIGN_OUT})
        }).catch((err) => {
            dispatch({type: actionTypes.SIGN_OUT_FAILED,error:err})
        });
    }
}


export const register=(userData)=>{
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        
        if(userData.name){
        firebase.auth().createUserWithEmailAndPassword(
            userData.email,
            userData.password
        ).then(() => {
            dispatch({type: actionTypes.REGISTER})
        }).catch((err) => {
            let message='error occured while registering.Please try later'
            //console.log(err);
            if(err.code=='auth/invalid-email'){
                message='Please Enter valid email'
            }
            if(err.code=='auth/weak-password'){
                message='Password should be at least 6 characters'
            }
            if(err.code == 'auth/email-already-in-use')
            {
                message='The email is already in use please change email.'
            }
            dispatch({type: actionTypes.REGISTER_FAILED,error : message})
        });
        }
    else
    {

        let message='Please Enter Name'
        if(!userData.email | !userData.password)
        {
            message='No field can be empty'
        }
        dispatch({type: actionTypes.REGISTER_FAILED,error : message})
         
    }
    }
} 
// export function signout(){
//     return {type: actionTypes.SIGN_OUT}
// }