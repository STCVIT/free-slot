const router = require('express').Router()
const {
    addTeam,
    getTeamById,
    getTeamByName,
    getAllTeams,
    updateTeam,
    deleteTeam
} = require('../controllers/teamController')
const checkTeam = require('../middleware/checkTeam')

router.post('/create', checkTeam, addTeam)
router.get('/getTeam/:team_id', checkTeam, getTeamById)
router.get('/getTeam/:name', checkTeam, getTeamByName)
router.get('/getAll/:regno', checkTeam, getAllTeams)
router.patch('/updateTeam/:team_id', checkTeam, updateTeam)
router.delete('/deleteTeam/:team_id', checkTeam, deleteTeam)

module.exports = router