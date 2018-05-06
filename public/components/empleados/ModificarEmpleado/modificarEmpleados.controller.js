(() => {
    'use strict';
    angular
        .module('randajad')
        .controller('controladorModificarEmpleado', controladorModificarEmpleado);

        controladorModificarEmpleado.$inject = ['$http', '$stateParams', '$state', 'servicioEmpleados', 'servicioImagen', 'Upload'];

    function controladorModificarEmpleado($http, $stateParams, $state, servicioEmpleados, servicioImagen, Upload) {
        const vm = this;

        }

        let empleadoPorEditar = servicioEmpleados.getCedula($stateParams.cedula);

        vm.empleadoPorEditar = {
            cedula : empleadoPorEditar.getCedula(),
            nombre : empleadoPorEditar.getnombre(),
            foto : empleadoPorEditar.getFoto(),
            fecha : empleadoPorEditar.getFecha(),
            correo : empleadoPorEditar.getCorreo(),
            contrasenna : empleadoPorEditar.getContrasenna()
        }

        vm.cloudObj = servicioImagen.getConfiguration();

        vm.modificarEmpleado = (pnuevoEmpleado) => {
            pnuevoEmpleado._cedula = empleadoPorEditar.getCedula();

            let nuevoEmpleado = Object.assign(new Empleado(), pnuevoHotel);

            let success = ServicioEmpleado.updateEmpleado(nuevoEmpleado);

            if (success == true) {
                swal({
                    title: "Registro exitoso",
                    text: "El empleado se ha editado correctamente",
                    icon: "success",
                    button: "Aceptar"
                });
                vm.hotelPorModificar = null;
                $state.go('main.listarEmpleados');
            } else {
                swal({
                    title: "Registro fallido",
                    text: "Ha ocurrido un error, inténtelo nuevamente más tarde",
                    icon: "error",
                    button: "Aceptar"
                });
            }
        }

    }
)();