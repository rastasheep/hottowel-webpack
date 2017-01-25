import angular from 'angular';
import templateUrl from './404.html';

angular
  .module('app.core')
  .run(appRun);

appRun.$inject = ['routerHelper'];
/* @ngInject */
function appRun(routerHelper) {
  var otherwise = '/404';
  routerHelper.configureStates(getStates(), otherwise);
}

function getStates() {
  return [
    {
      state: '404',
      config: {
        url: '/404',
        templateUrl: templateUrl,
        title: '404'
      }
    }
  ];
}
