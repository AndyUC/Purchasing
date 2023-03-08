const { StatusCodes } = require('http-status-codes');
const { CustomApiError } = require('./errors');
const notFoundMiddleware = (req,res)=>{
    res.status(StatusCodes.NOT_FOUND||404).send('route does not exit')
} ;

class NotFoundError extends CustomApiError{
    constructor(message){
        super(message)
        this.statuscode = StatusCodes.NOT_FOUND
    }
}

module.exports= {notFoundMiddleware,NotFoundError} 