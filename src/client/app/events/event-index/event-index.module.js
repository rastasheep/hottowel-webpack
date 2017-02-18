import angular from 'angular';
import appCore from '../../core';
import blocksLogger from '../../blocks/logger';
import widgetsJumbotron from '../../widgets/jumbotron';

angular.module('app.events.eventIndex', [
  appCore,
  widgetsJumbotron,
  blocksLogger,
]);
