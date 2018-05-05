(() => {
    'use strict'
    angular
        .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
        .config(routing);

    routing.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {
        $stateProvider
            .state('landingPage', {
                url: '/',
                templateUrl: './components/landingPage/landingPage.view.html',
                data: {
                    pageTitle: 'The Station'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/landingPage/landingPage.controller.js')
                    }]
                },
                controller: 'landingPageController',
                controllerAs: 'vm'
            })

            .state('inicioSesion', {
                url: '/login',
                templateUrl: './components/InicioSesion/inicioSesion.view.html',
                data: {
                    pageTitle: 'Inicio de Sesión'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/InicioSesion/inicioSesion.controller.js')
                    }]
                },
                controller: 'inicioSesion',
                controllerAs: 'vm'
            })

            .state('registroUsuarios', {
                url: '/registerUser',
                templateUrl: './components/usuarios/Cliente/registrarCliente/registrarCliente.view.html',
                data: {
                    pageTitle: 'Registro de usuarios | The Station'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/usuarios/Cliente/registrarCliente/registrarCliente.controller.js')
                    }]
                },
                controller: 'controladorRegistrarCliente',
                controllerAs: 'vm'
            })

            .state('main', {
                url: '/main',
                templateUrl: './components/main/main.view.html',
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/main/main.controller.js')
                    }]
                },
                controller: 'controladorMain',
                controllerAs: 'vm'
            })

            .state('main.home', {
                url: '/home',
                templateUrl: './components/main/principal.main/home.view.html',
                data: {
                    pageTitle: 'Pagina principal'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/main/main.controller.js')
                    }]
                },
                controller: 'controladorMain',
                controllerAs: 'vm'
            })

            .state('main.registrarHotel', {
                url: '/registerHotel',
                templateUrl: './components/hoteles/registrarHotel/registrarHotel.view.html',
                data: {
                    pageTitle: 'Registro de hoteles | The Station'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/hoteles/registrarHotel/registrarHotel.controller.js')
                    }]
                },
                controller: 'ControladorRegistrarHotel',
                controllerAs: 'vm'
            })

            .state('main.listarHotel', {
                url: '/listHotel',
                templateUrl: './components/hoteles/ListarHotel/listarHotel.view.html',
                data: {
                    pageTitle: 'Lista de Hoteles'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/hoteles/ListarHotel/listarHotel.controller.js')
                    }]
                },
                params: {
                    idHotel: ''
                },
                controller: 'controladorListarHotel',
                controllerAs: 'vm'
            })

            .state('main.listarUsuarios', {
                url: '/listUsers',
                templateUrl: './components/usuarios/Cliente/listarCliente/listarCliente.view.html',
                data: {
                    pageTitle: 'Listar Clientes'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/usuarios/Cliente/listarCliente/listarCliente.controller.js')
                    }]
                },
                params: {
                    idCliente: ''
                },
                controller: 'controladorListaUsuarios',
                controllerAs: 'vm'
            })




            .state('modificarHotel', {
                url: '/modificarHotel',
                templateUrl: './components/hoteles/modificarHotel/modificarHotel.view.html',
                data: {
                    pageTitle: 'Inicio de Sesión'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/hoteles/modificarHotel/modificarHotel.controller.js')
                    }]
                },
                controller: '',
                controllerAs: 'vm'
            })

            .state('PerfilHotel', {
                url: '/PerfilHotel',
                templateUrl: './components/hoteles/PerfilHotel/perfilHotel.view.html',
                data: {
                    pageTitle: 'Perfil'
                },
            }) 

            .state('modificarClientes', {
                url: '/modificarClientes',
                templateUrl: './components/usuarios/Cliente/ModificarCliente/modificarCliente.view.html',
                data: {
                    pageTitle: 'Listar Clientes'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/usuarios/Cliente/ModificarCliente/modificarCliente.controller.js')
                    }]
                },
                controller: '',
                controllerAs: 'vm'
            })

            .state('perfilCliente', {
                url: '/perfilCliente',
                templateUrl: './components/usuarios/Cliente/PerfilCliente/perfilCliene.view.html',
                data: {
                    pageTitle: 'Listar Clientes'
                },
            })



        $urlRouterProvider.otherwise('/');
    }

})();