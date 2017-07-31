angular.
   module('cpcApp', []);//we can pass multiple dependency to the cppApp module here

(function() {
   'use strict';

   angular
      .module('cpcApp')
      .controller('appController',['$scope','dataFactory', appController]);

   function appController($scope,dataFactory){
      var vm = $scope;

      dataFactory.get('./src/jsonData/policyData.json').then(function(data) {
         vm.items = data;
      });

      vm.name = ''; 
      vm.userSelectedFlag = false;

      vm.onItemSelected=function(){
         vm.policyHolderName = vm.name;
      }

   }

})();
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
(function() {
   'use strict';

   angular
      .module('cpcApp')
      .component('typeahead', {
         bindings: {
            items: '=',
            model: '=',
            onSelect: '&',
            selected: "="
         },
         controller:  ['$timeout', typeAheadController],
         controllerAs: 'typeAheadVm',
         templateUrl: 'src/app/components/typeAhead/typeAheadTemplate.html'
      });

   function typeAheadController($timeout){
      var vm = this;
      vm.handleSelection = function(selectedItem) {
         vm.model = selectedItem;
         vm.current = 0;
         vm.selected = true;
         vm.userSelectedFlag = true;
         $timeout(function() {
            vm.onSelect();
         }, 0);
      };
   }

})();