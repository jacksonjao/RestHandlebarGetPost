var express = require('express');
var router = express.Router();
var datos= require('../public/javascripts/db');

// POST


router.get('/', function(req, res, next) {
    res.render('viewPostUsuarios', { h2: 'Primer Ejercicio Web' })
});




router.post('/', function(req, res, next){
   console.log(req.body.nombre),
       datos.postUsuario(req.body.nombre, req.body.correo),

    res.redirect(303, '/')

    //res.redirect("get/users/")

});




module.exports = router;
