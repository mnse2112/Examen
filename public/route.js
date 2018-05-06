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

            .state('main.registrarTarea', {
                url: '/registroTarea',
                templateUrl: './components/tareas/registrarTarea/registrarTarea.view.html',
                data: {
                    pageTitle: 'randajad'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/tareas/registrarTarea/registrarTarea.controller.js')
                    }]
                },
                controller: 'registroTareasController',
                controllerAs: 'vm'
            })

            .state('main.listar', {
                url: '/listas',
                templateUrl: './components/empleados/listarEmpleado/listarCliente.view.html',
                data: {
                    pageTitle: 'randajad'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/empleados/listarEmpleado/listarCliente.controller.js')
                    }]
                },
                controller: 'controladorlistaEmpleados',
                controllerAs: 'vm'
            })


        $urlRouterProvider.otherwise('/main/');


    }
})();