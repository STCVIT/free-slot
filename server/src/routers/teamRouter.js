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
router.get('/getTeam/:team_id', getTeamById)
router.get('/getTeam/:name', getTeamByName)
router.get('/getAll/:regno', getAllTeams)
router.patch('/updateTeam/:team_id', updateTeam)
router.delete('/deleteTeam/:team_id', deleteTeam)

module.exports = router