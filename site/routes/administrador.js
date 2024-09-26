const express = require('express')
const router = express.Router()

let {crear,editar,listar,actualizar,tienda,eliminar} = require('../controllers/adminController')


router.get('/listar', listar)

router.get('/crear', crear)
router.post("/crear", tienda)

router.get('/editar/:id', editar)
router.put('/editar/:id', actualizar)

/* Eliminando un producto */
router.delete('/eliminar/:id', eliminar);
/*router.delete('/restaurar/:id', restaurar);*/
/*router.delete('/crash/:id', crash)*/

module.exports = router
