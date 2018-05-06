(() => {
    'use strict';
    angular
        .module('randajad')
        .controller('registroTareasController', registroTareasController);

    registroTareasController.$inject = ['$state', 'tareasService'];

    function registroTareasController($state, tareasService) {
        const vm = this;

        vm.prioridades = [{
            'name': 'Alta',
            'id': '1'
        }, {
            'name': 'Media',
            'id': '2'
        }, {
            'name': 'Baja',
            'id': '3'
        }];

        vm.proyectos = [{
            'name': 'Sitio web para Tosty',
            'id': '1'
        }, {
            'name': 'Aplicación web para Necrohana',
            'id': '2'
        }, {
            'name': 'Lanzamiento de Sailor Moon S',
            'id': '3'
        }, {
            'name': 'Sitio web para la película “Chancleta”',
            'id': '4'
        }];

        vm.nuevaTarea = {
            estadoTarea: 'Pendiente'
        };

        vm.registrerTarea = (pnuevatarea) => {
            pnuevatarea._id = 0;
            pnuevatarea.prioridad = pnuevatarea.prioridad.name;
            pnuevatarea.idProyecto = pnuevatarea.idProyecto.id;
            let tempTarea = Object.assign(new Tarea(), pnuevatarea);
            console.log(tempTarea);

            let success = tareasService.setTarea(tempTarea);

            if (success == true) {
                vm.nuevaTarea = null;
                $state.go('main.listaTareas');
            }

            console.log(success);
        }

    }
})();