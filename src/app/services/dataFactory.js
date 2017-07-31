(function() {
   'use strict';

   angular
      .module('cpcApp')
      .factory('dataFactory', ['$http', dataFactory]);

   function dataFactory($http) {
      return {
         get: function(url) {
            return $http.get(url).then(function(resp) {
               return resp.data.userData; 
            });
         }
      };
   };

})();