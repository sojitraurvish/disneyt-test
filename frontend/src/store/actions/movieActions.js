import { createAction } from "../../utils/reducer.utils"
import { MOVIE_DETAILS_ACTION_TYPES, MOVIE_LIST_ACTION_TYPES } from "../constants/movieConstants";
import { errorHandler } from "./errorHandler"
import axios from "axios"

export const getAllMovies=()=>async(dispatch)=>{
    try {
        dispatch(createAction(MOVIE_LIST_ACTION_TYPES.MOVIE_LIST_REQUEST))

        const config={
            headers:{
                "Content-Type":"application/json"
            }
        }

        const {data}=await axios.get(
            "http://127.0.0.1:4000/api/movies",
            config
        )

        // console.log(data);

        dispatch(createAction(
            MOVIE_LIST_ACTION_TYPES.MOVIE_LIST_SUCCESS,
            data
        ))

    } catch (error) {
        dispatch(createAction(
            MOVIE_LIST_ACTION_TYPES.MOVIE_LIST_FAIL,
            errorHandler(error)
        ))
        
    }
}

export const getMovieById=(movieId)=>async(dispatch)=>{
    try {
        dispatch(createAction(MOVIE_DETAILS_ACTION_TYPES.MOVIE_DETAILS_REQUEST))

        const config={
            headers:{
                "Content-Type":"application/json"
            }
        }

        const {data}=await axios.get(
            `http://127.0.0.1:4000/api/movies/${movieId}`,
            config
        )

        // console.log(data);

        dispatch(createAction(
            MOVIE_DETAILS_ACTION_TYPES.MOVIE_DETAILS_SUCCESS,
            data
        ))

    } catch (error) {
        dispatch(createAction(
            MOVIE_DETAILS_ACTION_TYPES.MOVIE_DETAILS_FAIL,
            errorHandler(error)
        ))
        
    }
}