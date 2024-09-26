const express = require('express')
const router = express.Router()

let {ingresar,registro} = require('../controllers/usuariosController')

router.get('/registro', registro)
router.get('/ingresar', ingresar)

module.exports = router