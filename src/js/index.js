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
typeAheadApp.factory('dataFactory', ['$http', function($http) {
  return {
    get: function(url) {
      return $http.get(url).then(function(resp) {
        return resp.data.userData; 
      });
    }
  };
}]);
/*typeAheadApp.filter('searchFilter', function(){
   return function(arr, searchString){

      var result = [];
      searchString = searchString.toLowerCase();

      angular.forEach(arr, function(item){
         if(item.name.toLowerCase().indexOf(searchString) !== -1){
            result.push(item);
         }
      });
        
      return result;
        
    };
});*/
typeAheadApp.component('typeahead', {
   bindings: {
      items: '=',
      model: '=',
      onSelect: '&',
      selected: "="
   },
   controller:  ['$scope', '$timeout', typeAheadController],
   controllerAs: 'typAhdCtrl',
   templateUrl: 'src/components/typeAheadTemplate.html'
});

function typeAheadController($scope,$timeout){
   var vm = this;
   vm.handleSelection = function(selectedItem) {
      vm.model = selectedItem;
      vm.current = 0;
      vm.selected = true;
      vm.checkSelected = true;
      $timeout(function() {
         vm.onSelect();
      }, 0);
   };
}
