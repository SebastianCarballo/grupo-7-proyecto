const express = require('express')
const router = express.Router()

let {contacto, about,inicio} = require('../controllers/indexController')

router.get('/', inicio)
router.get('/contacto', contacto);
router.get('/about', about)

module.exports = router