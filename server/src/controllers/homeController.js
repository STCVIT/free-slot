const getHome = (req, res)=>{
    const sessionCookie = req.cookies.session || ""
    admin.auth().verifySessionCookie(sessionCookie, true)
    .then(()=>{
        res.redirect('/home')
    })
    .catch((error)=>{
        res.redirect('/login')
        console.error(error)
    })
}

module.exports = { getHome }