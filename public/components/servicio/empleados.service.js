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
            getEmpleado: _getEmpleado,
            updateEmpleado: _updateEmpleado
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
            let empleadosListTemp = [],
                empleadosLista = [];

            let peticion = $.ajax({
                url: 'http://localhost:4000/api/get_all_users',
                type: 'get',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {}
            });

            peticion.done((res) => {
                empleadosListTemp = res;
            });

            peticion.fail((error) => {
                empleadosListTemp = [];
                console.log(error);
            });

            if (empleadosListTemp != []) {
                empleadosListTemp.forEach(obj => {
                    let tempEmpleado = Object.assign(new Empleado(), obj);
                    empleadosLista.push(tempEmpleado);
                })
            }

            return empleadosLista;
        }

        function _updateEmpleado(userdata) {
            let response;

            let peticion = $.ajax({
                url: 'http://localhost:4000/api/update_users',
                type: 'put',
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

        function _obtenerListaPorEstados(pestado) {
            let listaEmpleados = _obtenerlistadeEmpleados(),
                listaFiltrada = [];
      
            for(let i = 0; i < listaEmpleados.length; i++){
              if(listaEmpleados[i].getEstado() == pestado){
                listaFiltrada.push(listaEmpleados[i]);
              }
            }
            return listaFiltrada;
          }
    }

})();