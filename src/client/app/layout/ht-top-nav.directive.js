import angular from 'angular';
import templateUrl from './ht-top-nav.html';

angular
  .module('app.layout')
  .directive('htTopNav', htTopNav);

htTopNav.$inject = [];
/* @ngInject */
function htTopNav() {
  var directive = {
    bindToController: true,
    controller: TopNavController,
    controllerAs: 'vm',
    restrict: 'EA',
    scope: {
      'navline': '='
    },
    templateUrl: templateUrl,
  };

  TopNavController.$inject = ['$scope'];
  /* @ngInject */
  function TopNavController($scope) {
    $scope.isCollapsed = true;
  }

  return directive;
}
