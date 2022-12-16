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
class UserNotFoundError{
    constructor(){
        this.statusCode = 404
        this.message = "User Not Found"
    }
}
class DuplicateUser{
    constructor(){
        this.statusCode = 409
        this.message = "User Already Exists"
    }
}
class InvalidRegNo{
    constructor(){
        this.statusCode = 403
        this.message = "Registration Number Not Provided"
    }
}
class InvalidEmail{
    constructor(){
        this.statusCode = 403
        this.message = "Email Not Provided"
    }
}
module.exports = { 
    AuthError,
    EmailNotVerifiedError,
    BadRequestError,
    NotFoundError,
    UserNotFoundError,
    DuplicateUser,
    InvalidRegNo,
    InvalidEmail
}