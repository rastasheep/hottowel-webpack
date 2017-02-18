import angular from 'angular';
import indexTemplateUrl from './people-index/people-index.html';

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
        controller: 'PeopleIndexController',
        controllerAs: 'peopleIndexCtrl',
        templateUrl: indexTemplateUrl,
        title: 'People Index',
      }
    },
  ];
}
