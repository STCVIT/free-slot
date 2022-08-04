const router = require('express').Router;
const {
        addMeet,
        getMeet,
        getMeets,
        updateMeet,
        deleteMeet
} = require('../controllers/meetController')
const checkMeet = require('../middleware/checkMeet')

router.post('/create', checkMeet, addMeet)
router.get('/getMeet/:meet_id', checkMeet, getMeet)
router.get('/getMeets/:meet_id', checkMeet, getMeets)
router.patch('/updateMeet/:meet_id', checkMeet, updateMeet)
router.delete('/deleteMeet/:meet_id', checkMeet, deleteMeet)

module.exports = router