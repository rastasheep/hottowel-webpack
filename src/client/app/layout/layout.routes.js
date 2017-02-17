import angular from 'angular';
import templateUrl from './layout.html';

angular
.module('app.layout')
.run(appRun);

appRun.$inject = ['routerHelper'];
/* @ngInject */
function appRun(routerHelper) {
  routerHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'app',
      config: {
        url: '',
        abstract: true,
        templateUrl: templateUrl,
        controller: () => {},
        controllerAs: 'appLayoutCtrl',
      }
    }
  ];
}
