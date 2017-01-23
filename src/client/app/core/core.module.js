import angular from 'angular';
import 'angular-sanitize';
import 'angular-animate';

angular
  .module('app.core', [
    'ngAnimate', 'ngSanitize',
    'blocks.exception', 'blocks.logger', 'blocks.router',
    'ui.router', 'app.config'
  ]);
