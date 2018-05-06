(() => {
    'use strict';
    angular
        .module('randajad')
        .controller('controladorlistaEmpleados', controladorlistaEmpleados);

    controladorlistaEmpleados.$inject = ['$window', '$http', '$stateParams', '$state', 'servicioEmpleados'];

    function controladorlistaEmpleados($window, $http, $stateParams, $state, servicioEmpleados) {
        let vm = this;

        vm.listaEmpleados = servicioEmpleados.getEmpleado();

        vm.registrarTareas = (idusuario) => {
            $state.go('main.registrarTarea', {idUsuario: idusuario});
        }

        vm.verTareas = (idusuario) => {
            $state.go('main.listadoTareas', {idUsuario: idusuario});
        }

        vm.modificarUsuario = (idusuario) => {
            $state.go('main.modificarEmpleado', {idUsuario: idusuario});
        }

        vm.desactivaUsuarios = (usuario) => {
            usuario.setEstado(false);

            servicioEmpleados.updateEmpleado(usuario);
            $window.location.reload();
        }

        vm.activaUsuarios = (usuario) => {
            usuario.setEstado(true);

            servicioEmpleados.updateEmpleado(usuario);
            $window.location.reload();
            
        }

    }
})();