class ErrorHandler extends Error{
    constructer(message,statusCode){
        // super(message)
        this.statusCode=statusCode;
        // this.message=message;
        Error.captureStackTrace(this,this.constructer)
    }
   
}

module.exports=ErrorHandler