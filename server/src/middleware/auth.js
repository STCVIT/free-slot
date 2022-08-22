const admin = require('firebase-admin');
const errorHandler = require('../middleware/errorHandler');
const successHandler = require('../middleware/successHandler');
const { AuthError, EmailNotVerifiedError } = require('../utilities/error');
const { UserDeletedSuccess } = require('../utilities/success');

var serviceAccount = require("../../../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const signup = (req, res, next)=>{
    if(req.headers['authorization']==undefined || !req.headers['authorization']) {
        console.log("undefined route hitting.... "+req.headers['authorization'])
        return errorHandler(new AuthError(), req, res)
    }
    const tokenString = req.headers['authorization'] ? req.headers['authorization'].split(" "): null
    console.log(tokenString)
    admin
    .auth()
    .verifyIdToken(tokenString[1])
    .then((user)=>{
            console.log(user)
            // req.body.name = user.name.slice(0, user.name.length-12)
            // req.body.regno = user.name.match(/\(([^)]+)\)/)[1] //use regex here check once
            // req.body.email = user.mail;
            // req.body.idToken = user.idToken;
            // next();
        
    })
    // .then(
    //     (sessionCookie)=>{
    //         const options = {maxAge: expiresin, httpOnly: true}
    //         res.cookie("session", sessionCookie, options)
    //         res.end(JSON.stringify({status: success}))
    //     })
    .catch((err)=>{
        console.log(err.message);
        console.log('Error fetching user data:', error);
        //errorHandler(new AuthError(), req, res)
    })
}

const sessionLogin = async (req, res)=>{
    if(req.header("Authorization")==undefined || !req.header("Authorization")) {
                 return errorHandler(new AuthError(), req, res)
             }
    const idToken = req.body.idToken.toString()
    const expiresin = 60*60*24*5*1000
    admin
        .auth()
        .createSessionCookie(idToken, {expiresin})
        .then(
            (sessionCookie)=>{
                const options = {maxAge: expiresin, httpOnly: true}
                res.cookie("session", sessionCookie, options)
                res.end(JSON.stringify({status: success}))
            })
        .catch((error)=>{
                res.status(401).send("Unauthorized request")
                console.error(error)
            }
        )
}

const sessionLogout = async (req, res)=>{
    res.clearCookie("session")
    res.redirect('/login')
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

const authLog = (req, res)=>{
    console.log(req.body.header['Authorization'])
}
module.exports = { checkUser, deleteUser, signup, sessionLogin, sessionLogout, authLog }