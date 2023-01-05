const router = require('express').Router();
const { checkUser } = require('../middleware/auth')
const { checkFreeSlot, freeSlotScreenshot, freeSlotCp, freeslotML } = require('../controllers/freeSlotController')

router.post('/freeslot', checkUser, checkFreeSlot)
router.post('/string', checkUser, freeslotML, freeSlotScreenshot)
router.post('/freeSlotCopyPaste', checkUser, freeSlotCp)
module.exports = router