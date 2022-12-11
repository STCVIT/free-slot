const router = require('express').Router();
const {
        addMeet,
        getMeet,
        getAllMeets,
        getAllUpcomingMeets,
        getAllPastMeets,
        getAllCancelledMeets,
        updateMeet,
        deleteMeet
} = require('../controllers/meetController')
const { addSlot } = require('../controllers/freeSlotController')
const { getUserReg, getUserName } = require('../controllers/userController')
const { getAllTeams } = require('../controllers/teamController')
const { checkUser } = require('../middleware/auth')

router.post('/create', getUserName, addMeet, addSlot)
router.post('/getmeets', getAllTeams, getAllMeets)
router.post('/getUpcoming', checkUser, getAllTeams, getAllUpcomingMeets)
router.post('/getPast', checkUser, getAllTeams, getAllPastMeets)
router.post('/getCancelled', checkUser, getAllTeams, getAllCancelledMeets)
router.patch('/updateMeet', updateMeet)
router.delete('/deleteMeet/:meet_id', deleteMeet)

module.exports = router