(() => {
    'use strict';
    angular
        .module('randajad')
        .controller('controladorModificarEmpleado', controladorModificarEmpleado);

    controladorModificarEmpleado.$inject = ['$http', '$stateParams', '$state', 'servicioEmpleados', 'servicioImagen', 'Upload'];

    function controladorModificarEmpleado($http, $stateParams, $state, servicioEmpleados, servicioImagen, Upload) {
        const vm = this;

        if(!$stateParams.idUsuario){
            $state.go('main.listaDeEmpleados');
        }

        let idEmpleado = $stateParams.idUsuario;

        vm.empleadoPorEditar = servicioEmpleados.getUsuario(idEmpleado);
        vm.empleadoPorEditar.fecha = new Date(vm.empleadoPorEditar.fecha);

        vm.modificarEmpleado = (pnuevoEmpleado) => {

            let nuevoEmpleado = Object.assign(new Empleado(), pnuevoEmpleado);

            let success = servicioEmpleados.updateEmpleado(nuevoEmpleado);

            if (success == true) {
                swal({
                    title: "Registro exitoso",
                    text: "El empleado se ha editado correctamente",
                    icon: "success",
                    button: "Aceptar"
                });
                vm.empleadoPorEditar = null;
                $state.go('main.listaDeEmpleados');
            } else {
                swal({
                    title: "Edición fallida",
                    text: "Ha ocurrido un error, inténtelo nuevamente más tarde",
                    icon: "error",
                    button: "Aceptar"
                });
            }
        }

    }

})();