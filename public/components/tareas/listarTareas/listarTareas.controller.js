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

        function obtenerListaPorEstados(estado){
            vm.listarUsuariosDesactivados = tareasService.obtenerListaPorEstados(false);
        }

        vm.desactivaTareas = (tareas) => {
            tareas.setEstado(false);

            tareasService.updateTarea(tareas);
            $window.location.reload();
        }

        vm.activaUsuarios = (tareas) => {
            tareas.setEstado(true);

            servicioEmpleados.updateTarea(tareas);
            $window.location.reload();
            
        }
    }
})();