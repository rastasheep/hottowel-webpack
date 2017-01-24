import angular from 'angular';
import templateUrl from './shell.html';

angular
  .module('app.layout')
  .directive('shell', shell);

shell.$inject = [];
/* @ngInject */
function shell() {
  return {
    restrict: 'E',
    controller: 'ShellController',
    controllerAs: 'vm',
    templateUrl: templateUrl,
    bindToController: {},
    scope: {}
  };
}
