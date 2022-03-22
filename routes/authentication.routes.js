const express = require('express')
const router = express.Router()

const AuthenticationController = require('../controllers/authentication.controller')
const authenticationController = new AuthenticationController()

/* Get employees list */
router.post('/login', authenticationController.login)

module.exports = router
