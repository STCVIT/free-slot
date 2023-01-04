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
    constructor(message){
        this.statusCode = 404
        this.message = message || "Requested Resource was Not Found"
    }
}
class UserNotFoundError{
    constructor(){
        this.statusCode = 400
        this.message = "User Not Found"
    }
}
class TeamNotFoundError{
    constructor(){
        this.statusCode = 400
        this.message = "Team Not Found"
    }
}
class MeetNotFoundError{
    constructor(){
        this.statusCode = 400
        this.message = "Meet Not Found"
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
class InvalidTeamId{
    constructor(){
        this.statusCode = 403
        this.message = "Team Id Not Provided"
    }
}
class InvalidMeetId{
    constructor(){
        this.statusCode = 403
        this.message = "Meet Id Not Provided"
    }
}
class TeamNameError{
    constructor(){
        this.statusCode = 403
        this.message = "Team Name Not Provided"
    }
}
class MembersError{
    constructor(){
        this.statusCode = 403
        this.message = "Members Not Provided"
    }
}
class CouldNotExtractData{
    constructor(){
        this.statusCode = 400
        this.message = "Could Not Extract Data"
    }
}
module.exports = { 
    AuthError,
    EmailNotVerifiedError,
    BadRequestError,
    NotFoundError,
    UserNotFoundError,
    TeamNotFoundError,
    MeetNotFoundError,
    DuplicateUser,
    InvalidRegNo,
    InvalidEmail,
    InvalidTeamId,
    InvalidMeetId,
    TeamNameError,
    MembersError,
    CouldNotExtractData
}