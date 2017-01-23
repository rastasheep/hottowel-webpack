import angular from 'angular';
import toastr from 'toastr';
import moment from 'moment';

angular
  .module('app.core')
  .constant('toastr', toastr)
  .constant('moment', moment);
