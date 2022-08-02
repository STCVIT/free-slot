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
module.exports = { AuthError, EmailNotVerifiedError }