/* eslint-disable sort-imports */
import angular from 'angular';
import 'angular-animate';
import 'angular-sanitize';

angular
  .module('app.core', [
    'ngAnimate', 'ngSanitize',
    'blocks.exception', 'blocks.logger', 'blocks.router',
    'ui.router', 'app.config'
  ]);
