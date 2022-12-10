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

router.post('/create', getUserName, addMeet, addSlot)
router.post('/getmeets', getAllTeams, getAllMeets)
router.post('/getUpcoming', getAllTeams, getAllUpcomingMeets)
router.post('/getPast', getAllTeams, getAllPastMeets)
router.post('/getCancelled', getAllTeams, getAllCancelledMeets)
router.patch('/updateMeet', updateMeet)
router.delete('/deleteMeet/:meet_id', deleteMeet)

module.exports = router