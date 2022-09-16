const router = require('express').Router();
const { checkFreeSlot, freeSlotScreenshot, freeSlotCopyPaste } = require('../controllers/freeSlotController')

router.get('/freeslot', checkFreeSlot)
router.post('/freeSlotScreenshot', freeSlotScreenshot)
router.post('/freeSlotCopyPaste', freeSlotCopyPaste)
module.exports = router