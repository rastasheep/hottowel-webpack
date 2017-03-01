import angular from 'angular';

class PeopleIndexController {
  /* @ngInject */
  constructor ($q, dataservice, logger) {
    this.$q = $q;
    this.dataservice = dataservice;
    this.logger = logger;
  }

  $onInit() {
    this.messageCount = 0;
    this.people = [];
    this.people.$resolved = false;

    var promises = [this.getMessageCount(), this.getPeople()];
    this.$q.all(promises).then(() => {
      this.logger.info('Activated People Index View');
    });
  }

  getMessageCount() {
    return this.dataservice.getMessageCount().then((data) => {
      this.messageCount = data;
    });
  }

  getPeople() {
    return this.dataservice.getPeople().then((data) => {
      this.people = data;
      this.people.$resolved = true;
    });
  }
}
PeopleIndexController.$inject = ['$q', 'dataservice', 'logger'];

angular
  .module('app.people.peopleIndex')
  .controller('PeopleIndexController', PeopleIndexController);
