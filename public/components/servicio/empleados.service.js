(()=>{
    'use strict'
    'use strict';
    angular
      .module('randajad')
      .service('servicioEmpleados', servicioEmpleados);

      servicioEmpleados.$inject = ['$http','$log'];

    function servicioEmpleados($http, $log){
        const publicUserAPI = {
            setEmpleado : _setEmpleado,
            getEmpleado : _getEmpleado
        }
        return publicUserAPI;

        function _setEmpleado(userdata){
            
        }

        function _getEmpleado(){
            
        }
    }
  
})();