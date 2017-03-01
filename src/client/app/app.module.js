import angular from 'angular';
import appCore from './core';
import appEvents from './events';
import appLayout from './layout';
import appPeople from './people';

angular.module('app', [
  appCore,
  appEvents,
  appPeople,
  appLayout,
]);
