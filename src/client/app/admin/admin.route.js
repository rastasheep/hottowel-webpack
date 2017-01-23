import angular from 'angular';
import templateUrl from './admin.html';

angular
  .module('app.admin')
  .run(appRun);

appRun.$inject = ['routerHelper'];
/* @ngInject */
function appRun(routerHelper) {
  routerHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'admin',
      config: {
        url: '/admin',
				templateUrl: templateUrl,
        controller: 'AdminController',
        controllerAs: 'vm',
        title: 'Admin',
        settings: {
          nav: 2,
          content: '<i class="fa fa-lock"></i> Admin'
        }
      }
    }
  ];
}
