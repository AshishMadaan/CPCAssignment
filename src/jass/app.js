var typeAheadApp = angular.module('app', []);

typeAheadApp.controller('mainController',['$scope','dataFactory', function($scope,dataFactory){
   
   dataFactory.get('./src/json/policyData.json').then(function(data) {
      $scope.items = data;
   });

   $scope.name = ''; 
   $scope.checkSelected = false;

   $scope.onItemSelected=function(){
      $scope.policyHolder = $scope.name;
   }

}])