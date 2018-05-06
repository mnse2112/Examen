(() => {
    'use strict'
    'use strict';
    angular
        .module('randajad')
        .service('servicioEmpleados', servicioEmpleados);

    servicioEmpleados.$inject = ['$http', '$log'];

    function servicioEmpleados($http, $log) {
        const publicUserAPI = {
            setEmpleado: _setEmpleado,
            getEmpleado: _getEmpleado
        }
        return publicUserAPI;

        function _setEmpleado(userdata) {
            let response;

            let peticion = $.ajax({
                url: 'http://localhost:4000/api/save_user',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {
                    'cedula': userdata.getCedula(),
                    'nombre': userdata.getnombre(),
                    'foto': userdata.getFoto(),
                    'fecha': userdata.getFecha(),
                    'correo': userdata.getCorreo(),
                    'contrasenna': userdata.getContrasenna(),
                    'estado': userdata.getEstado()
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

        function _getEmpleado() {

        }
    }

})();