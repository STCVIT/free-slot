const db = require('../../db')
const User = db.users;
const { NotFounError } = require('../utilities/error')
const errorhandler = require('../middleware/errorHandler')

const addUser = async (req, res)=>{
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

const getUser = async (req, res)=>{
    try{
        let regno = req.params.regno;
        if(!regno || regno==undefined){
            return res.status(418).send("Invalid registration number")
        }
        const user = await User.findOne({
            reg_no: regno
        })
        if(!user) {
            return errorhandler(new NotFounError, req, res)
        }
        res.status(200).send(user)
    }
    catch(err){
        errorhandler(new BadRequestError)
        console.error(err.message);
    }
}
const getUsers = async (req, res)=>{
    try{
        const users = await User.find({
            meet_id: req.params.meet_id
        }).sort()
        if(!users) {
            return errorhandler(new NotFounError, req, res)
        }
        res.status(200).send(users)
    }
    catch(err){
        errorhandler(new BadRequestError)
        console.error(err.message);
    }
}

const updateUser = async (req, res)=>{
    const updates = Object.keys(req.body)
    try{
        let regno = req.params.regno
        if(!regno || regno == undefined){
            return res.status(418).send("Invalid registration number")
        }
        const user = await User.findOne({
            reg_no: regno
        })
        if(!user) {
            return errorhandler(new NotFounError, req, res)
        }
        updates.forEach((update)=> (user[update] = req.body[update]));
        await user.save()
        res.status(200).send(user)
    }
    catch(err){
        errorhandler(new BadRequestError)
        console.error(err.message);
    }
}
const storage = multer.memoryStorage()
const upload = multer({ storage: storage,
                        fileFilter: (req, file, cb) =>{
                            const fileTypes = /jpeg|jpg|png|gif/
                            const mimeType = fileTypes.test(file.mimetype)
                            const extname = fileTypes.test(path.extname(file.originalname))
                            if(mimeType && extname){ return cb(null, true)}
                            cb('Give proper files formate to upload')
                        } }).single('image')

module.exports = { 
    addUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
}
