import angular from 'angular';
import toastr from 'toastr';


angular
  .module('app.constants', [])
  .constant('toastr', toastr);

export default 'app.constants';
