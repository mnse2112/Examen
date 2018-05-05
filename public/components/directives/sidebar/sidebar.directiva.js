(() => {
    'use strict';
    angular
        .module('theStation')
        .directive('menuLateral', menuLateral);

    function menuLateral() {
        let sidebar = {
            templateUrl: '/components/directives/sidebar/sidebar.html',
            restrict: 'EA'
        };

        return sidebar;
    }
})();