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
