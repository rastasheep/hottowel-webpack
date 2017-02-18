import angular from 'angular';

var core = angular.module('app.core');

core.config(toastrConfig);

toastrConfig.$inject = ['toastr'];
/* @ngInject */
function toastrConfig(toastr) {
  toastr.options.timeOut = 4000;
  toastr.options.positionClass = 'toast-bottom-right';
}

var config = {
  appErrorPrefix: '[hottowel-webpack Error] ',
  appTitle: 'hottowel-webpack'
};

core.value('config', config);

core.config(configure);

configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
/* @ngInject */
function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
  if ($logProvider.debugEnabled) {
    $logProvider.debugEnabled(true);
  }
  exceptionHandlerProvider.configure(config.appErrorPrefix);
  routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
}

core.config(promisesConfig);

promisesConfig.$inject = ['$qProvider'];
/* @ngInject */
function promisesConfig($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
}

core.config(loadingBarConfig);

loadingBarConfig.$inject = ['cfpLoadingBarProvider'];
/* @ngInject */
function loadingBarConfig(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
}
