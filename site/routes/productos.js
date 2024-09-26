const express = require('express')
const router = express.Router()

let {carrito,detalle,} = require('../controllers/productosController')

router.get('/carrito/:id', carrito)
router.get('/detalle/:id', detalle)



module.exports = router