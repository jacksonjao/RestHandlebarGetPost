/**
 * Created by Juliana on 12/02/17.
 */

var usuarios=[
    {"nombre":"Juliana", "correo":"jumavipe@hotmail.com"},
    {"nombre":"Jhon", "correo":"jacksonjao@hotmail.com"},
    {"nombre":"Maria", "correo":"maria@hotmail.com"},
    {"nombre":"Pedro", "correo":"pedrito@hotmail.com"},
    {"nombre":"Juan", "correo":"juancho@hotmail.com"},
    {"nombre":"Antonio", "correo":"antony@hotmail.com"},
]

exports.getUsuarios=function () {
    return usuarios;
}

exports.getUsuario= function (index) {
    return usuarios[index];
}


exports.postUsuario = function(nombre, correo) {
    usuarios.push({
        "nombre" : nombre,
        "correo" : correo
    });
    
    
}

exports.putUsuario=function (nombre, correo,id) {
    usuarios[id]=({
        "nombre":nombre,
        "correo":correo
    })
}

exports.deleteUsuario= function (id) {
    delete usuarios[id]
}

exports.deleteUsuarios=function(){
    usuarios=[]
}