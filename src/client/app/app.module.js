import angular from 'angular';
import appAdmin from './admin';
import appCore from './core';
import appLayout from './layout';
import appPeople from './people';
import appWidgets from './widgets';

angular.module('app', [
  appCore,
  appWidgets,
  appAdmin,
  appPeople,
  appLayout,
]);
