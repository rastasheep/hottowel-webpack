import angular from 'angular';
import moment from 'moment';
import toastr from 'toastr';

angular
  .module('app.core')
  .constant('toastr', toastr)
  .constant('moment', moment);
