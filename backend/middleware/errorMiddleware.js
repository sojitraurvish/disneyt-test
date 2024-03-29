
const notFound=(req,res,next)=>{
    const error=new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandler=(err,req,res,next)=>{
    const statusCode=(req.statusCode===200 || !req.statusCode) ? 500 : req.statusCode;
    console.log(err);
    res.status(statusCode).json({
        message:err.message,
        stack:process.env.NODE_ENV==="production" ? null : err.stack
    })
}

export {
    notFound,
    errorHandler
}
