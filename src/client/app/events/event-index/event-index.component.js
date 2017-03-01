import angular from 'angular';
import templateUrl from './event-index.html';

angular
  .module('app.events.eventIndex')
  .component('eventIndex', {
    controller: 'EventIndexController',
    templateUrl: templateUrl,
  });
