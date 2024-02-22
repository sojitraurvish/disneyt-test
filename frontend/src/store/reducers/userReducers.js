import { USER_LOGIN_ACTION_TYPES } from "../constants/userConstants"



export const userLoginReducer=(state={},action)=>{
    const {type,payload}=action

    switch(type){
        case USER_LOGIN_ACTION_TYPES.USER_LOGIN_REQUEST:
            return {...state,loading:true}

        case USER_LOGIN_ACTION_TYPES.USER_LOGIN_SUCCESS:
            return {...state,loading:false,userInfo:payload}

        case USER_LOGIN_ACTION_TYPES.USER_LOGIN_FAIL:
            return {...state,loading:false,error:payload}

        case USER_LOGIN_ACTION_TYPES.USER_LOGOUT:
            return {}

        default:
            return state
    }
}