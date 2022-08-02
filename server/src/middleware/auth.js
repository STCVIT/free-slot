const express = require('express');
const admin = require('firebase-admin');
const path = require('path');
require("dotenv").config({path: path.resolve(__dirname, "../../../.env")});

const errorHandler = require('../middleware/errorHandler');
const successHandler = require('../middleware/successHandler');
const { AuthError, EmailNotVerifiedError } = require('../utilities/error');
const { UserCreatedSuccess, UserDeletedSuccess } = require('../utilities/success');

var service = {
    api_key: process.env.APIKEY,
    auth_domain: process.env.AUTH_DOMAIN,
    project_id: process.env.PROJECT_ID,
    storage_bucket: process.env.STORAGE_BUCKET,
    messaging_sender_id: process.env.MESSAGING_SENDER_ID,
    app_id: process.env.APP_ID,
    measurement_id: process.env.MEASUREMENT_ID
}
admin.initializeApp({
    credential: admin.credential.cert(service)
})
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
            req.userId = uid;
            req.mail = user.mail;
            req.idToken = token;
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
    await admin.auht().deleteUser(uid);
    return successHandler(new UserDeletedSuccess(), res)
}
module.exports = { checkUser, deleteUser}