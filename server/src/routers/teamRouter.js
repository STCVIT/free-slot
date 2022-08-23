const router = require('express').Router()
const {
    addTeam,
    getTeamById,
    getTeamByName,
    getAllTeams,
    updateTeam,
    deleteTeam
} = require('../controllers/teamController')
//const checkTeam = require('../middleware/checkTeam')

router.post('/create', addTeam)
router.get('/getTeam', getTeamById)
router.get('/getTeam/:name', getTeamByName)
router.get('/getAll/:regno', getAllTeams)
router.patch('/updateTeam', updateTeam)
router.delete('/deleteTeam', deleteTeam)

module.exports = router