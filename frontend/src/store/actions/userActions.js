import { createAction } from "../../utils/reducer.utils"
import { USER_LOGIN_ACTION_TYPES } from "../constants/userConstants"
import {getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
import { db,app } from "../../firebase.config"
import { errorHandler } from "./errorHandler"

export const login=()=>async(dispatch)=>{
    try {
        dispatch(createAction(USER_LOGIN_ACTION_TYPES.USER_LOGIN_REQUEST))

        const auth=getAuth();
        const provider=new GoogleAuthProvider()
        const result=await signInWithPopup(auth,provider)

        console.log(result);
        dispatch(createAction(
            USER_LOGIN_ACTION_TYPES.USER_LOGIN_SUCCESS,
            result
        ))

        localStorage.setItem("userInfo",JSON.stringify(result))
    } catch (error) {
        dispatch(createAction(
            USER_LOGIN_ACTION_TYPES.USER_LOGIN_FAIL,
            errorHandler(error)
        ))
        
    }
}


export const logout=()=> async(dispatch)=>{
    try {
        const auth=getAuth()
        auth.signOut()
        localStorage.removeItem("userInfo")

        dispatch(createAction(
            USER_LOGIN_ACTION_TYPES.USER_LOGOUT
        ))
    }
    catch(error){
        dispatch(createAction(
            USER_LOGIN_ACTION_TYPES.USER_LOGOUT,
            errorHandler(error)
        ))
    }
}