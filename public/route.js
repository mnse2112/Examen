(() => {
    'use strict'
    angular
        .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
        .config(routing);

    routing.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: './components/main/main.view.html',
                data: {
                    pageTitle: 'randajad'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/main/main.controller.js')
                    }]
                },
                controller: 'mainController',
                controllerAs: 'vm'
            })

            .state('main.home', {
                url: '/',
                templateUrl: './components/main/principal.main/home.view.html',
                data: {
                    pageTitle: 'randajad'
                }
            })

            .state('main.registrarEmpleado', {
                url: '/registroEmpleado',
                templateUrl: './components/empleados/registrarEmpleado/registrarEmpleado.view.html',
                data: {
                    pageTitle: 'randajad'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/empleados/registrarEmpleado/registrarEmpleado.controller.js')
                    }]
                },
                controller: 'registrarEmpleado',
                controllerAs: 'vm'
            })

            .state('main.listaDeEmpleados', {
                url: '/listarEmpleados',
                templateUrl: './components/empleados/listarEmpleado/listarEmpleado.view.html',
                data: {
                    pageTitle: 'randajad'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/empleados/listarEmpleado/listarEmpleado.controller.js')
                    }]
                },
                controller: 'controladorlistaEmpleados',
                controllerAs: 'vm'
            })

            .state('main.listadoEmpleadosDeshabilitados', {
                url: '/listaEmpleadosDeshabilitados',
                templateUrl: './components/empleados/listarDeshabilitados/listarDeshabilitados.view.html',
                data: {
                    pageTitle: 'randajad'
                },
                params: {
                    idUsuario: ''
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/empleados/listarDeshabilitados/listarDeshabilitados.controller.js')
                    }]
                },
                controller: 'controladorlistaEmpleadosDeshabilitados',
                controllerAs: 'vm'
            })

            .state('main.modificarEmpleado', {
                url: '/modificarInformación',
                templateUrl: './components/empleados/ModificarEmpleado/modificarEmpleados.view.html',
                data: {
                    pageTitle: 'randajad'
                },
                params: {
                    idUsuario: ''
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/empleados/ModificarEmpleado/modificarEmpleados.controller.js')
                    }]
                },
                controller: 'controladorModificarEmpleado',
                controllerAs: 'vm'
            })

            .state('main.registrarTarea', {
                url: '/registroTarea',
                templateUrl: './components/tareas/registrarTarea/registrarTarea.view.html',
                data: {
                    pageTitle: 'randajad'
                },
                params: {
                    idUsuario: ''
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/tareas/registrarTarea/registrarTarea.controller.js')
                    }]
                },
                controller: 'registroTareasController',
                controllerAs: 'vm'
            })

            .state('main.listadoTareas', {
                url: '/listaTareas',
                templateUrl: './components/tareas/listarTareas/listarTareas.view.html',
                data: {
                    pageTitle: 'randajad'
                },
                params: {
                    idUsuario: ''
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/tareas/listarTareas/listarTareas.controller.js')
                    }]
                },
                controller: 'controladorListaTareas',
                controllerAs: 'vm'
            })

            .state('main.modificarTarea', {
                url: '/modificarTarea',
                templateUrl: './components/tareas/modificarTareas/modificarTareas.view.html',
                data: {
                    pageTitle: 'randajad'
                },
                params: {
                    idTarea: ''
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/tareas/modificarTareas/modificarTareas.controller.js')
                    }]
                },
                controller: 'controladorModificarTarea',
                controllerAs: 'vm'
            })

        $urlRouterProvider.otherwise('/main/');

    }
})();