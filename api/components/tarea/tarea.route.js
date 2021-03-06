const express = require('express'),
      router = express.Router(),
      tareas = require('./tarea.api');

router.param('id', (req, res, next, id) => {
  req.body._id = id;
  next();
});

router.route('/save_tarea')
  .post((req, res) => {
    tareas.registerTarea(req,res);
});

router.route('/get_all_tareas')
  .get((req, res) => {
    tareas.listTareas(req,res);
});

router.route('/update_tarea')
  .put((req, res) => {
    tareas.updateTarea(req,res);
});

router.route('/get_tareas_por_usuario')
  .put((req, res) => {
    tareas.obetenerTareasPorId(req, res);
  });

module.exports = router;