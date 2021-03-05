const { response } = require('express')


    const usuariosGet = (req, res = response) => {
        res.json({
            ok: true,
            msj: 'Prueba API'
        })
    }

    const usuariosGetbyId = (req, res = response) => {
        const id = req.params.id
        res.json({
            ok: true,
            msj: 'Prueba API',
            id : id
        })
    }


    const usuariosPost = (req, res = response) => {
        const {nombre, edad} = req.body;
        res.json({
            ok: true,
            msj: 'Posteo',
            nombre,
            edad
        })
    }

    const usuariosPut = (req, res = response) => {
        const id = req.params.id
        res.json({
            ok: true,
            msj: 'Put',
            id: id
        })
    }
  module.exports = {
      usuariosGet,
      usuariosGetbyId,
      usuariosPost,
      usuariosPut
    };