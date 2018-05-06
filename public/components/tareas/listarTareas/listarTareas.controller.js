(() => {
    'use strict';
    angular
        .module('randajad')
        .controller('controladorListaTareas', controladorListaTareas);

    controladorListaTareas.$inject = ['$http', '$stateParams', '$state', 'tareasService'];

    function controladorListaTareas($http, $stateParams, $state, tareasService) {
        let vm = this;

        vm.listaTareas

        if($stateParams.idUsuario){
            listaFiltrada($stateParams.idUsuario);
        }else{
            vm.listaTareas = tareasService.getTareas();
        }

        function listaFiltrada(idUsuario){
            vm.listaTareas = tareasService.getTareasPorUsuario(idUsuario);
        }

    }
})();