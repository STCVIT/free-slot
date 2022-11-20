const router = require('express').Router();
const { checkFreeSlot, freeSlotScreenshot, freeSlotCp, freeslotML } = require('../controllers/freeSlotController')

router.post('/freeslot', checkFreeSlot)
router.post('/string', freeslotML, freeSlotScreenshot)
router.post('/freeSlotCopyPaste', freeSlotCp)
module.exports = router