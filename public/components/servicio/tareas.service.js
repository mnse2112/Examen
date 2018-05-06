(() => {
    'use strict'
    angular
        .module('randajad')
        .service('tareasService', tareasService);

    tareasService.$inject = ['$http', '$log'];

    function tareasService($http, $log) {
        const publicUserAPI = {
            setTarea: _setTarea,
            getTareas: _getTareas,
            updateTarea: _updateTarea
        }
        return publicUserAPI;

        function _setTarea(tareaData) {
            let response;

            let peticion = $.ajax({
                url: 'http://localhost:4000/api/save_tarea',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {
                    'nombreTarea': tareaData.getnombreTarea(),
                    'descripcion': tareaData.getdescripcionTarea(),
                    'fechaAsignacion': tareaData.getfechaAsignacion(),
                    'prioridad': tareaData.getprioridad(),
                    'estadoTarea': tareaData.getestadoTarea(),
                    'costo': tareaData.getCosto(),
                    'idProyecto': tareaData.getIdProyecto()
                }
            });

            peticion.done((res) => {
                response = res.success;
                console.log(res.msj);
            });

            peticion.fail((error) => {
                response = error;
                console.log(response.error);
            });

            return response;
        }

        function _getTareas() {
            let tareasListTemp = [],
                tareasLista = [];

            let peticion = $.ajax({
                url: 'http://localhost:4000/api/get_all_tareas',
                type: 'get',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {}
            });

            peticion.done((res) => {
                tareasListTemp = res;
            });

            peticion.fail((error) => {
                tareasListTemp = [];
                console.log(response.error);
            });

            if (tareasListTemp != []) {
                tareasListTemp.forEach(obj => {
                    let tempTarea = Object.assign(new Tarea(), obj);
                    tareasLista.push(tempTarea);
                })
            }

            return tareasLista;
        }

        function _updateTarea(tareaData) {
            let response;

            let peticion = $.ajax({
                url: 'http://localhost:4000/api/update_tarea',
                type: 'put',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {
                    '_id' : tareaData.getId(),
                    'nombreTarea': tareaData.getnombreTarea(),
                    'descripcion': tareaData.getdescripcionTarea(),
                    'fechaAsignacion': tareaData.getfechaAsignacion(),
                    'prioridad': tareaData.getprioridad(),
                    'estadoTarea': tareaData.getestadoTarea(),
                    'costo': tareaData.getCosto(),
                    'idProyecto': tareaData.getIdProyecto()
                }
            });

            peticion.done((res) => {
                response = res.success;
                console.log(res.msj);
            });

            peticion.fail((error) => {
                response = error;
                console.log(response.error);
            });

            return response;
        }


    }
})();