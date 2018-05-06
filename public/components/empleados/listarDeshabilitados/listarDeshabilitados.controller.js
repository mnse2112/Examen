(() => {
    'use strict';
    angular
        .module('randajad')
        .controller('controladorlistaEmpleadosDeshabilitados', controladorlistaEmpleadosDeshabilitados);

        controladorlistaEmpleadosDeshabilitados.$inject = ['$window', '$http', '$stateParams', '$state', 'servicioEmpleados'];

    function controladorlistaEmpleadosDeshabilitados($window, $http, $stateParams, $state, servicioEmpleados) {
        let vm = this;

        vm.listaEmpleados = servicioEmpleados.getEmpleado();
       

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

        vm.listarUsuariosDesactivados = servicioEmpleados.obtenerListaPorEstados(false);
    }
})();