import angular from 'angular';
import templateUrl from './people-index.html';

angular
  .module('app.people.peopleIndex')
  .component('peopleIndex', {
    controller: 'PeopleIndexController',
    templateUrl: templateUrl,
  });
