(() => {
    'use strict';
    angular
      .module('randajad')
      .controller('registrarEmpleado', registrarEmpleado);
  
      registrarEmpleado.$inject = ['servicioEmpleados']; 
  
    function registrarEmpleado(servicioEmpleados) {
      let vm = this;
        
      vm.nuevoEmpleado = {};
      

      vm.registrarUsuario = (pnuevoEmpleado) => {
        pnuevoEmpleado.rol = 2;

        let nuevoEmpleado = Object.assign(new Empleados(), pnuevoEmpleado);
        let success = servicioEmpleados.setEmpleado(pnuevoEmpleado); 

        console.log(pnuevoEmpleado)

        if (success == true){
            swal({
                tittle: "Registro exitoso",
                text: "Usuario ha sido registrado correctamente",
                icon: "success",
                button: "Aceptar",
            });
            vm.nuevoEmpleado = null;
        }else{
            swal({
                tittle: "Registro fallido",
                text: "Usuario no ha podido ser registrado. Inténtelo de nuevo más tarde",
                icon: "error",
                button: "Aceptar"
            })
        }
      }
      
    }
  })();