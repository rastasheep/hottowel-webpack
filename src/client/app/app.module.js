import angular from 'angular';
import appAdmin from './admin';
import appCore from './core';
import appDashboard from './dashboard';
import appLayout from './layout';
import appWidgets from './widgets';

angular.module('app', [
  appCore,
  appWidgets,
  appAdmin,
  appDashboard,
  appLayout,
]);
