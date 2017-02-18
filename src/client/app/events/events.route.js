import angular from 'angular';
import indexTemplateUrl from './event-index/event-index.html';

angular
  .module('app.events')
  .run(appRun);

appRun.$inject = ['routerHelper'];
/* @ngInject */
function appRun(routerHelper) {
  routerHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'app.events',
      config: {
        url: '/events',
        abstract: true,
        template: '<ui-view/>',
      }
    },
    {
      state: 'app.events.index',
      config: {
        url: '',
        controller: 'EventIndexController',
        controllerAs: 'eventIndexCtrl',
        templateUrl: indexTemplateUrl,
        title: 'Event Index',
      }
    },
  ];
}
