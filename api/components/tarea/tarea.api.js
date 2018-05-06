const tareaModel = require('./tarea.model');

module.exports.registerTarea = (req, res) => {
    console.log(req);
    var newHotel = Object.assign(new tareaModel(), req.body);

    newHotel.save((err) => {
        if (err) {
            res.json({ success: false, msj: 'Ha ocurrido un error en el registro de usuarios' + err });
        } else {
            res.json({ success: true, msj: 'Se registró el usuario correctamente' });
        }
    });
};

module.exports.listTareas = (req, res) => {
    tareaModel.find().then((hotels) => {
        res.send(hotels);
    });
};

module.exports.updateTarea = (req, res) => {
    tareaModel.findByIdAndUpdate(req.body._id, { $set: req.body }, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'No se ha actualizado.' + handleError(err) });

        } else {
            res.json({ success: true, msg: 'Se ha actualizado correctamente.' + res });
        }
    });
};