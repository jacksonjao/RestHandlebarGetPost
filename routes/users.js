var express = require('express');
var router = express.Router();
var datos= require('../public/javascripts/db');



/* Consultar usuarios. */
router.get('/get/users', function(req, res, next) {
  //res.send('respond with a resource');
    res.render('viewUsuarios',{usuarios: datos.getUsuarios()})
  //console.log(datos.getUsuarios().nombre);
    console.log(datos.getUsuarios().length);
});



/* Consultar un usuario. */
router.get("/get/users/:id", function(req, res, next) {

/*
    if(req.params.id<datos.getUsuarios().length){
        var nombre=datos.getUsuario(req.params.id).nombre;
        var correo=datos.getUsuario(req.params.id).correo;
        res.render('viewUsuario',{name: nombre, mail:correo})
    }else{

        res.status(404).send("El usuarios con el id "+req.params.id+" no está registrado");

    }*/

    if(req.params.id<datos.getUsuarios().length){
        res.render('viewUsuario',{usuario: datos.getUsuario(req.params.id)})
    }else{
        res.status(404).send("El usuarios con el id "+req.params.id+" no está registrado");
    }






});

router.post('/get/users/submit', function(req, res, next) {
    //res.send('respond with a resource');
   var id=req.body.id;

   res.redirect("/get/users/"+id)



});




// Crear usuario


router.get('/post/users/registrar', function(req, res, next) {
    res.render('viewPostUsuarios', { h2: 'Primer Ejercicio Web' })
});




router.post('/post/users/registrar/submit/', function(req, res, next){
    console.log(req.body.nombre),
        datos.postUsuario(req.body.nombre, req.body.correo),

        res.redirect(303, '/')

    //res.redirect("get/users/")

});



module.exports = router;
