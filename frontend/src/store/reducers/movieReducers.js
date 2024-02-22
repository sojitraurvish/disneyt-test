import { MOVIE_LIST_ACTION_TYPES,MOVIE_DETAILS_ACTION_TYPES } from "../constants/movieConstants"


export const movieListReducer=(state={movies:[]},action)=>{
    const {type,payload}=action

    switch(type){
        case MOVIE_LIST_ACTION_TYPES.MOVIE_LIST_REQUEST:
            return {...state,loading:true}

        case MOVIE_LIST_ACTION_TYPES.MOVIE_LIST_SUCCESS:
            return {...state,loading:false,movies:payload}

        case MOVIE_LIST_ACTION_TYPES.MOVIE_LIST_FAIL:
            return {...state,loading:false,error:payload}

        default:
            return state
    }
}

export const movieDetailsReducer=(state={movie:{}},action)=>{
    const {type,payload}=action

    switch(type){
        case MOVIE_DETAILS_ACTION_TYPES.MOVIE_DETAILS_REQUEST:
            return {...state,loading:true}

        case MOVIE_DETAILS_ACTION_TYPES.MOVIE_DETAILS_SUCCESS:
            return {...state,loading:false,movie:payload}

        case MOVIE_DETAILS_ACTION_TYPES.MOVIE_DETAILS_FAIL:
            return {...state,loading:false,error:payload}

        default:
            return state
    }
}