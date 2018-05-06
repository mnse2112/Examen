(() => {
    'use strict';
    angular
        .module('randajad')
        .controller('controladorModificarTarea', controladorModificarTarea);

    controladorModificarTarea.$inject = ['$http', '$stateParams', '$state', 'tareasService'];

    function controladorModificarTarea($http, $stateParams, $state, tareasService) {
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

        if (!$stateParams.idTarea) {
            $state.go('main.listadoTareas');
        }

        console.log($stateParams.idTarea);

        let idTarea = $stateParams.idTarea;

        vm.tareaPorEditar = tareasService.getTarea(idTarea);
        vm.tareaPorEditar.fechaAsignacion = new Date(vm.tareaPorEditar.fechaAsignacion);

        vm.modificarTarea = (pnuevaTarea) => {
            pnuevaTarea.prioridad = pnuevaTarea.prioridad.name;
            pnuevaTarea .idProyecto = pnuevaTarea.idProyecto.name;

            let nuevoEmpleado = Object.assign(new Tarea(), pnuevaTarea);

            let success = tareasService.updateTarea(nuevoEmpleado);

            if (success == true) {
                swal({
                    title: "Registro exitoso",
                    text: "El empleado se ha editado correctamente",
                    icon: "success",
                    button: "Aceptar"
                });
                vm.empleadoPorEditar = null;
                $state.go('main.listadoTareas');
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