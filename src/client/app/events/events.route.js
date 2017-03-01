import angular from 'angular';

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
        component: 'eventIndex',
        title: 'Event Index',
      }
    },
  ];
}
