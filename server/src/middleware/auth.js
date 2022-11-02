const admin = require('firebase-admin');
const errorHandler = require('../middleware/errorHandler');
const successHandler = require('../middleware/successHandler');
const { AuthError, EmailNotVerifiedError } = require('../utilities/error');
const { UserDeletedSuccess } = require('../utilities/success');

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };
admin.initializeApp(firebaseConfig)
const sessionLogin = async (req, res)=>{
    if(req.header("Authorization")==undefined || !req.header("Authorization")) {
                 return errorHandler(new AuthError(), req, res)
             }
    const idToken = req.header("Authorization").split(" ")[1]
    const expiresin = 60*60*24*5*1000
    admin
        .auth()
        .createSessionCookie(idToken, expiresin)
        .then(
            (sessionCookie)=>{
                const options = {maxAge: expiresin, secure: true, httpOnly: false } //make this true in production
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
    const tokenString = req.header("Authorization").split(" ")[1];
    const sessionCookie = req.cookies.session
    //console.log(sessionCookie)
    admin
    .auth()
    .verifyIdToken(tokenString)
    .verifySessionCookie(sessionCookie, true)
    .then((user)=>{
        const uid = user.uid
        console.log(uid)
        next()
    })
    .catch((err)=>{
        console.log(err.message);
        errorHandler(new AuthError(), req, res)
    })
}
const deleteUser = async (req, res)=>{
    const id = req.userId;
    await admin.auth().deleteUser(id);
    return successHandler(new UserDeletedSuccess(), res)
}
module.exports = { checkUser, deleteUser, sessionLogin, sessionLogout }