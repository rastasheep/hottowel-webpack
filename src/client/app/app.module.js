import angular from 'angular';
import appAdmin from './admin';
import appCore from './core';
import appEvents from './events';
import appLayout from './layout';
import appPeople from './people';
import appWidgets from './widgets';

angular.module('app', [
  appCore,
  appEvents,
  appWidgets,
  appAdmin,
  appPeople,
  appLayout,
]);
