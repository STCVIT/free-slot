const multer = require('multer')
const db = require('../../db')
const User = db.users;

const addUser = async (req, res)=>{
    console.log("addUsers")
    try {
        let info = {
        image: req.file.path,
        name: req.body.name,
        regno: req.body.regno,
        email: req.body.email,
        password: req.body.password,

    }
    const user = await User.create(info)
    res.status(200).send(user)
    console.log(user);
}
catch (err){
    console.error(err.message);
}
}

// const addImage = async (req, res)=>{
//     try {
//         const user = await User.create(req.body) 
//         res.status(200).send(user)
//     }
//     catch(err){
//         console.error(err.message);
//     }
// }
const storage = multer.memoryStorage()
const upload = multer({ storage: storage,
                        fileFilter: (req, file, cb) =>{
                            const fileTypes = /jpeg|jpg|png|gif/
                            const mimeType = fileTypes.test(file.mimetype)
                            const extname = fileTypes.test(path.extname(file.originalname))
                            if(mimeType && extname){ return cb(null, true)}
                            cb('Give proper files formate to upload')
                        } }).single('image')

module.exports = { addUser, upload}
