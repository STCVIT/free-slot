const router = require('express').Router;
const { checkFreeSlot } = require('../controllers/freeSlotController')

router.get('/freeslot', checkFreeSlot)

module.exports = router