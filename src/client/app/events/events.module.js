import angular from 'angular';
import appCore from '../core';

import appEventsIndex from './event-index';

angular.module('app.events', [
  appCore,
  appEventsIndex,
]);
