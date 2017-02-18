import angular from 'angular';
import appCore from '../core';

import appPeopleIndex from './people-index';

angular.module('app.people', [
  appCore,
  appPeopleIndex,
]);
