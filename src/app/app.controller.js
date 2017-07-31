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