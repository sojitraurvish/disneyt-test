import express from "express"
import dotenv from "dotenv"
import path from "path"
import colors from "colors"
import morgan from "morgan"
import connectDb from "./config/db.js"
import { errorHandler,notFound } from "./middleware/errorMiddleware.js"
import moviesRoutes from "./routes/moviesRoutes.js"
import cors from "cors"

colors.enable();

const __dirname=path.resolve()
dotenv.config({path:path.join(__dirname,"backend","config","config.env")})

connectDb() 

const app=express();

// Enable CORS
app.use(cors());

if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"))
}

app.use(express.json())


app.get("/",(req,res,next)=>{
    res.send("API is running")
})

app.use("/api/movies",moviesRoutes)

app.use(notFound)  

app.use(errorHandler)

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} in port ${PORT}`.yellow.bold);
})