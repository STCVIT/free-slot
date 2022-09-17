const router = require('express').Router();
const { checkFreeSlot, freeSlotScreenshot, freeSlotCp } = require('../controllers/freeSlotController')

router.get('/freeslot', checkFreeSlot)
router.post('/freeSlotScreenshot', freeSlotScreenshot)
router.post('/freeSlotCopyPaste', freeSlotCp)
module.exports = router