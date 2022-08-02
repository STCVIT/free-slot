class UserCreatedSuccess{
    constructor(){
        this.statusCode = 201
        this.message = "User created successfully"
    }
}
class UserDeletedSuccess{
    constructor(){
        this.statusCode = 201
        this.message = "User deleted successfully"
    }
}
module.exports = { UserCreatedSuccess, UserDeletedSuccess }