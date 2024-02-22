import asyncHandler from "express-async-handler"
import { Movie } from "../models/moviesModel.js"

/**
 * Get all movies
 * @route POST /api/movies
 * @access Private
 */
const getAllMovies=asyncHandler(async(req,res,next)=>{
    const movies=await Movie.find({})

    res.status(200).json(movies)
})

/**
 * Get Movie By Id
 * @route POST /api/movies
 * @access Private
 */
const getMovieById=asyncHandler(async(req,res,next)=>{
    const movie=await Movie.findById(req.params.id)
    if(movie){
        
        return res.status(200).json(movie)
    }else{
        throw new Error("Product not Found")
    }

})

export const MOVIES_CONTROLLERS={
    getAllMovies,
    getMovieById
}