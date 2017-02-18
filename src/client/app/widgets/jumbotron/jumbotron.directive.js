import angular from 'angular';
import templateUrl from './jumbotron.html';

angular
  .module('widgets.jumbotron')
  .directive('jumbotron', jumbotron);

jumbotron.$inject = [];
/* @ngInject */
function jumbotron() {
  var directive = {
    bindToController: {
      heading: '@?',
      description: '@?',
      background: '@?',
    },
    controller: JumbotronController,
    controllerAs: 'jumbotronCtrl',
    templateUrl: templateUrl,
    restrict: 'EA',
    scope: true,
  };
  return directive;
}


JumbotronController.$inject = [];
/* @ngInject */
function JumbotronController() {
  var vm = this;
  vm.$onInit = onInit;

  function onInit() {
    vm.jumbotronClass = vm.background ? `widget-jumbotron__bg-${vm.background}` : '';
  }
}
