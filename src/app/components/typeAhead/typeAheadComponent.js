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