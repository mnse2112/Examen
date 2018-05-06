(() => {
    'use strict';
    angular
        .module('randajad')
        .controller('controladorlistaEmpleados', controladorlistaEmpleados);

    controladorlistaEmpleados.$inject = ['$http', '$stateParams', '$state', 'servicioEmpleados'];

    function controladorlistaEmpleados($http, $stateParams, $state, servicioEmpleados) {
        let vm = this;

        vm.listaEmpleados = servicioEmpleados.getEmpleado();

    }
})();