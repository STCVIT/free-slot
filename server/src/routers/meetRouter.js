const router = require('express').Router;
const {
        addMeet,
        getMeet,
        getMeets,
        updateMeet,
        deleteMeet
} = require('../controllers/meetController')
//const checkMeet = require('../middleware/checkMeet')

router.post('/create', addMeet)
router.get('/getMeet/:meet_id', getMeet)
router.get('/getMeets/:meet_id', getMeets)
router.patch('/updateMeet/:meet_id', updateMeet)
router.delete('/deleteMeet/:meet_id', deleteMeet)

module.exports = router