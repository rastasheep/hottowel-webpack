import angular from 'angular';
import fourOhFourTemplateUrl from './404.html';
import layoutTemplateUrl from './layout.html';

angular
.module('app.layout')
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
      state: 'app',
      config: {
        url: '',
        abstract: true,
        templateUrl: layoutTemplateUrl,
        controller: () => {},
        controllerAs: 'appLayoutCtrl',
      }
    },
    {
      state: 'app.index',
      config: {
        url: '/',
        controller: ['$state', ($state) => $state.go('app.people.index')]
      }
    },
    {
      state: 'app.404',
      config: {
        url: '/404',
        templateUrl: fourOhFourTemplateUrl,
        tite: '404',
      }
    },
  ];
}
