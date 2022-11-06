const router = require('express').Router();
const {
        addMeet,
        getMeet,
        getAllMeets,
        updateMeet,
        deleteMeet
} = require('../controllers/meetController')
const { addSlot } = require('../controllers/freeSlotController')
const { getUserReg, getUserName } = require('../controllers/userController')
const { getAllTeams } = require('../controllers/teamController')

router.post('/create', getUserName, addMeet, addSlot)
router.get('/getmeets', getAllTeams, getAllMeets)
router.patch('/updateMeet', updateMeet)
router.delete('/deleteMeet/:meet_id', deleteMeet)

module.exports = router