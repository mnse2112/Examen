const mongoose = require('mongoose'),
      states = ['pendiente', 'en curso', 'realizado'],
      prioridad = ['urgente', 'normal'];

var TareaSchema = new mongoose.Schema({
    'nombreTarea'     : { type: String, required: true },
    'descripcion'     : { type: String, required: true },
    'fechaAsignacion' : { type: String, required: true },
    'prioridad'       : { type: String, required: true, em: prioridad },
    'provincia'       : { type: String, required: true },
    'estadoTarea'     : { type: String, required: true, em: states },
    'costo'           : { type: String, required: true },
    'nombreProyecto'  : { type: String, required: true }
});

module.exports = mongoose.model('Tarea', TareaSchema);