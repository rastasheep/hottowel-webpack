import angular from 'angular';

angular
  .module('app.core')
  .factory('dataservice', dataservice);

dataservice.$inject = ['$http', '$q', 'exception', 'logger', 'envConfig'];
/* @ngInject */
function dataservice($http, $q, exception, logger, envConfig) {
  var service = {
    getPeople: getPeople,
    getMessageCount: getMessageCount
  };
console.log(envConfig);

  return service;

  function getMessageCount() { return $q.when(72); }

  function getPeople() {
    return $http.get(envConfig.api.root + '/api/people')
      .then(success)
      .catch(fail);

    function success(response) {
      return response.data;
    }

    function fail(e) {
      return exception.catcher('XHR Failed for getPeople')(e);
    }
  }
}
