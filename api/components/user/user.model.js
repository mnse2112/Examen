const mongoose = require ('mongoose');

var EmpleadoSchema = new mongoose.Schema({
    cedula          : {type: String, required: true, unique: true},
    nombre          : {type: String, required: true},
    foto            : {type: String, required: true},
    fecha           : {type: Date, required: true},
    correo          : {type: String, required: true},
    contrasenna     : {type: String, required: true},
    estado          : {type: String, required: true}
   
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);