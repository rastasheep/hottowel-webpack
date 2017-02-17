import angular from 'angular';

angular
  .module('app.people.peopleIndex')
  .controller('PeopleIndexController', PeopleIndexController);

PeopleIndexController.$inject = ['$q', 'dataservice', 'logger'];
/* @ngInject */
function PeopleIndexController($q, dataservice, logger) {
  var vm = this;
  vm.messageCount = 0;
  vm.people = [];
  vm.people.$resolved = false;

  activate();

  function activate() {
    var promises = [getMessageCount(), getPeople()];
    return $q.all(promises).then(function() {
      logger.info('Activated People Index View');
    });
  }

  function getMessageCount() {
    return dataservice.getMessageCount().then(function(data) {
      vm.messageCount = data;
      return vm.messageCount;
    });
  }

  function getPeople() {
    return dataservice.getPeople().then(function(data) {
      vm.people = data;
      vm.people.$resolved = true;
      return vm.people;
    });
  }
}
