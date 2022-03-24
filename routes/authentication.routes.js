const express = require('express')
const router = express.Router()

const AuthenticationController = require('../controllers/authentication.controller')
const authenticationController = new AuthenticationController()

/* Login */
router.post('/login', authenticationController.login)

/* Validate authorization token token */
router.get('/validate', authenticationController.validate, (req, res) => { res.status(200).send() })

module.exports = router
