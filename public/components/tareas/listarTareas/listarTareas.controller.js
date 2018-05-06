(() => {
    'use strict';
    angular
        .module('randajad')
        .controller('controladorListaTareas', controladorListaTareas);

    controladorListaTareas.$inject = ['$http', '$stateParams', '$state', 'tareasService'];

    function controladorListaTareas($http, $stateParams, $state, tareasService) {
        let vm = this;

        vm.listaTareas = tareasService.getTareas();

    }
})();