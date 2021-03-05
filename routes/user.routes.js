const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosGetbyId } = require('../controllers/usuarios.controller'); 

const router = Router();

router.get('/', usuariosGet)
router.get('/:id', usuariosGetbyId)
router.post('/', usuariosPost)
router.put('/:id', usuariosPut)



module.exports = router;