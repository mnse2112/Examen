const mongoose = require('mongoose'),
      states = ['Pendiente', 'En curso', 'Realizado'],
      prioridad = ['Alta', 'Media', 'Baja'];

var TareaSchema = new mongoose.Schema({
    'nombreTarea'     : { type: String, required: true },
    'descripcion'     : { type: String, required: true },
    'fechaAsignacion' : { type: Date, required: true },
    'prioridad'       : { type: String, required: true, em: prioridad },
    'estadoTarea'     : { type: String, required: true, em: states },
    'costo'           : { type: String, required: true },
    'idProyecto'      : { type: String, required: true }
});

module.exports = mongoose.model('Tarea', TareaSchema);