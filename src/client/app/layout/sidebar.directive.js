import angular from 'angular';
import templateUrl from './sidebar.html';

angular
  .module('app.layout')
  .directive('sidebar', sidebar);

sidebar.$inject = [];
/* @ngInject */
function sidebar() {
  return {
    restrict: 'E',
    controller: 'SidebarController',
    controllerAs: 'vm',
    templateUrl: templateUrl,
    bindToController: {},
    scope: {}
  };
}
