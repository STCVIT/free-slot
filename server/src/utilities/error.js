class AuthError{
    constructor(){
        this.statusCode = 401
        this.message = "User not authenticated"
    }
}
class EmailNotVerifiedError{
    constructor(){
        this.statusCode = 401
        this.message = "Email is not verified"
    }
}
class BadRequestError{
    constructor(){
        this.statusCode = 400
        this.message = "Bad Request"
    }
}
class NotFoundError{
    constructor(){
        this.statusCode = 404
        this.message = "Not Found"
    }
}
module.exports = { 
    AuthError,
    EmailNotVerifiedError,
    BadRequestError,
    NotFoundError
}