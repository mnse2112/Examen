(() => {
    'use strict';
    angular
        .module('randajad')
        .controller('registrarEmpleado', registrarEmpleado);

    registrarEmpleado.$inject = ['servicioEmpleados', 'servicioImagen', 'Upload'];

    function registrarEmpleado(servicioEmpleados, servicioImagen, Upload) {
        const vm = this;

        vm.nuevoEmpleado = {
            estado : true
        };
        vm.cloudObj = servicioImagen.getConfiguration();

        vm.preregistrarEmpleado = (pnuevoEmpleado) => {
        vm.cloudObj.data.file = pnuevoEmpleado.foto[0];
        Upload.upload(vm.cloudObj).success((data) => { 
            vm.registrarEmpleado(pnuevoEmpleado, data.url);
        });
        }


        vm.registrarEmpleado = (pnuevoEmpleado, urlImagen) => {

            pnuevoEmpleado.foto = urlImagen;

            let tempEmpleado = Object.assign(new Empleado(), pnuevoEmpleado);
            console.log(tempEmpleado);
            let success = servicioEmpleados.setEmpleado(tempEmpleado);

            console.log(pnuevoEmpleado)

            if (success == true) {
                swal({
                    tittle: "Registro exitoso",
                    text: "Usuario ha sido registrado correctamente",
                    icon: "success",
                    button: "Aceptar",
                });
                vm.nuevoEmpleado = null;
            } else {
                swal({
                    tittle: "Registro fallido",
                    text: "Usuario no ha podido ser registrado. Inténtelo de nuevo más tarde",
                    icon: "error",
                    button: "Aceptar"
                })
            }
        }

    }
})();