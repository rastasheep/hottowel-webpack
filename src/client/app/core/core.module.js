import angular from 'angular';

angular
  .module('app.core', [
    'ngAnimate', 'ngSanitize',
    'blocks.exception', 'blocks.logger', 'blocks.router',
    'ui.router', 'app.config'
  ]);
