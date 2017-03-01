import angular from 'angular';

class DataService {
  /* @ngInject */
  constructor($http, $q, exception, envConfig) {
    this.$http = $http;
    this.$q = $q;
    this.exception = exception;
    this.envConfig = envConfig;
  }

  getMessageCount() {
    return this.$q.when(72);
  }

  getPeople() {
    return this.$http.get(this.envConfig.api.root + '/api/people')
      .then((response) => response.data)
      .catch((ex) => this.exception.catcher('XHR Failed for getPeople')(ex));
  }
}
DataService.$inject = ['$http', '$q', 'exception', 'envConfig'];

angular
  .module('app.core')
  .service('dataservice', DataService);

