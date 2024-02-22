import mongoose from "mongoose"


const connectDb=async()=>{

    if(process.env.MONGO_URI!==undefined){
        try{
            mongoose.set("strictQuery",false)
            const conn=await mongoose.connect(process.env.MONGO_URI,{
                //useUnifiedTropology:true,
                // useNewUrlParser:true,
                // useCreateIndex:true
            })

            console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline);
        }
        catch(error){
            console.error(`ERROR: ${error.message}`.red.underline.bold)
            process.exit(1);
        }
    }else{
        console.log("ERROR: MONGO_URI is not defined into .env file or not able to read it.".red);
    }
}

export default connectDb