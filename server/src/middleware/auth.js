const admin = require('firebase-admin');
const errorHandler = require('../middleware/errorHandler');
const successHandler = require('../middleware/successHandler');
const { AuthError, EmailNotVerifiedError } = require('../utilities/error');
const { UserDeletedSuccess } = require('../utilities/success');
const path = require('path')
//locally running
require('dotenv').config({path: path.resolve(__dirname, '../../.env')})
admin.initializeApp({
    credential: admin.credential.cert({
        privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
        clientEmail: process.env.CLIENT_EMAIL,
        projectId: process.env.PROJECT_ID
    })
})


const checkUser = (req, res, next)=>{
    if(req.header("Authorization")==undefined || !req.header("Authorization")) {
        return errorHandler(new AuthError(), req, res)
    }
    const tokenString = req.header("Authorization").split(" ")[1];
    admin
    .auth()
    .verifyIdToken(tokenString)
    .then((user)=>{
        req.body.email=user.email
        next()
    })
    .catch((err)=>{
        console.log("checkUser Error "+err.message);
        errorHandler(new AuthError(), req, res)
    })
}
const deleteUser = async (req, res)=>{
    const id = req.userId;
    await admin.auth().deleteUser(id);
    return successHandler(new UserDeletedSuccess(), res)
}
module.exports = { checkUser, deleteUser }