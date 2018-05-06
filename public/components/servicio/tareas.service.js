(() => {
    'use strict'
    angular
        .module('randajad')
        .service('tareasService', tareasService);

    tareasService.$inject = ['$http', '$log'];

    function tareasService($http, $log) {
        const publicUserAPI = {
           setTarea : _setTarea 
        }
        return publicUserAPI;

        function _setTarea(tareaData) {
            let response;

            let peticion = $.ajax({
                url: 'http://localhost:3000/api/save_tarea',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: 'false',
                data : {}
            });

            peticion


            return response;
        }

        function _getHotel() {
            let hotelData = dataStorageFactory.getHotelData(),
                hotelList = [];

            hotelData.forEach(obj => {
                let tempHotel = Object.assign(new Hotel(), obj);

                hotelList.push(tempHotel)
            });

            return hotelList;
        }

        function _updateHotel(hotelData) {
            let hotelList = _getHotel(),
                success;
            success = dataStorageFactory.updateHotelData(hotelData);
            return success;
        }

        function _getHotelesPorTipo(tipoHotel) {
            let listaHoteles = _getHotel(),
                listaFiltrada = [];

            for (let i = 0; i < listaHoteles.length; i++) {
                if (listaHoteles[i].getTipoHotel() == tipoHotel) {
                    listaFiltrada.push(listaHoteles);
                }
            }
            return listaFiltrada;
        }

        function _getHotelPorId(idHotel) {
            let listaHoteles = _getHotel(),
                hotel;
            for (let i = 0; i < listaHoteles.length; i++) {
                if (listaHoteles[i].getId() == idHotel) {
                    hotel = listaHoteles[i];
                }
            }
            return hotel;
        }

    }
})();