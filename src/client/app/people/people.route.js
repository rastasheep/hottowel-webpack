import angular from 'angular';

angular
  .module('app.people')
  .run(appRun);

appRun.$inject = ['routerHelper'];
/* @ngInject */
function appRun(routerHelper) {
  routerHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'app.people',
      config: {
        url: '/people',
        abstract: true,
        template: '<ui-view/>',
      }
    },
    {
      state: 'app.people.index',
      config: {
        url: '',
        component: 'peopleIndex',
        title: 'People Index',
      }
    },
  ];
}
