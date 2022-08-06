const admin = require('firebase-admin');
const app = require('express')
const path = require('path');
const session = require('express-session')
require("dotenv").config({path: path.resolve(__dirname, "../../../.env")});

const errorHandler = require('../middleware/errorHandler');
const successHandler = require('../middleware/successHandler');
const { AuthError, EmailNotVerifiedError } = require('../utilities/error');
const { UserDeletedSuccess } = require('../utilities/success');

//testing
var serviceAccount = require("../../../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const signupUser = (req, res, next)=>{
    if(req.header("Authorization")==undefined || !req.header("Authorization")) {
        return errorHandler(new AuthError(), req, res)
    }
    const token = req.header("Authorization");
    admin
    .auth()
    .verifyIdToken(token)
    .then((user)=>{
        const uid = user.uid
        if(!user.email_verified) {
            return errorHandler(new EmailNotVerifiedError(), req, res)
        } else {
            req.body.userId = uid
            req.body.name = user.name
            req.body.regno = user.name.match(/\(([^)]+)\)/)[1] //use regex here check once
            req.body.email = user.mail;
            req.body.idToken = token;
            next();
        }
    })
    .catch((err)=>{
        console.log(err.message);
        errorHandler(new AuthError(), req, res)
    })
}

const checkUser = (req, res, next)=>{
    if(req.header("Authorization")==undefined || !req.header("Authorization")) {
        return errorHandler(new AuthError(), req, res)
    }
    const token = req.header("Authorization");
    admin
    .auth()
    .verifyIdToken(token)
    .then((user)=>{
        const uid = user.uid
        if(!user.email_verified) {
            return errorHandler(new EmailNotVerifiedError(), req, res)
        } else {
            next();
        }
    })
    .catch((err)=>{
        console.log(err.message);
        errorHandler(new AuthError(), req, res)
    })
}
const deleteUser = async (req, res)=>{
    const id = req.userId;
    await admin.auht().deleteUser(id);
    return successHandler(new UserDeletedSuccess(), res)
}
module.exports = { checkUser, deleteUser }