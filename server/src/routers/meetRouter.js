const router = require('express').Router();
const {
        addMeet,
        getAllMeets,
        getAllUpcomingMeets,
        getAllPastMeets,
        getAllCancelledMeets,
        updateMeetStatus
} = require('../controllers/meetController')
const { addSlot } = require('../controllers/freeSlotController')
const { getUserName } = require('../controllers/userController')
const { getAllTeams } = require('../controllers/teamController')
const { checkUser } = require('../middleware/auth')

router.post('/create', checkUser, getUserName, addMeet, addSlot)
router.get('/getmeets', checkUser, getAllTeams, getAllMeets)
router.post('/getUpcoming', checkUser, getAllTeams, getAllUpcomingMeets)
router.post('/getPast',checkUser,  getAllTeams, getAllPastMeets)
router.post('/getCancelled', checkUser, getAllTeams, getAllCancelledMeets)
router.patch('/updateMeet',checkUser,  updateMeetStatus)

module.exports = router

//unused code
// router.delete('/deleteMeet/:meet_id', checkUser, deleteMeet)