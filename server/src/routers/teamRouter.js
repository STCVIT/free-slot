const router = require('express').Router()
const {
    addTeam,
    getTeamById,
    getTeamByName,
    getAllTeams,
    updateTeam,
    deleteTeam,
    getTeamMembers
} = require('../controllers/teamController')
//const checkTeam = require('../middleware/checkTeam')

router.post('/create', addTeam)
router.get('/getTeam', getTeamById)
router.get('/getTeam/:name', getTeamByName)
router.get('/getAll/:regno', getAllTeams)
router.post('/getTeamMembers', getTeamMembers) //to query in responses of link feature
router.patch('/updateTeam/:team_id', updateTeam)
router.delete('/deleteTeam', deleteTeam)

module.exports = router