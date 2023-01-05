const router = require('express').Router();
const {
        addMeet,
        getAllMeets,
        updateMeetStatus
} = require('../controllers/meetController')
const { addSlot } = require('../controllers/freeSlotController')
const { getUserName } = require('../middleware/userFunctions')
const { getAllTeams } = require('../middleware/teamFunctions')
const { checkUser } = require('../middleware/auth')

router.post('/create', checkUser, getUserName, addMeet, addSlot)
router.get('/getMeets/:status', checkUser, getAllTeams, getAllMeets)
router.patch('/updateMeet',checkUser,  updateMeetStatus)

module.exports = router

//unused code
// router.delete('/deleteMeet/:meet_id', checkUser, deleteMeet)
//router.post('/getUpcoming', checkUser, getAllTeams, getAllUpcomingMeets)
//router.post('/getPast',checkUser,  getAllTeams, getAllPastMeets)
// router.get('/cancelled', checkUser, getAllTeams, getAllCancelledMeets)