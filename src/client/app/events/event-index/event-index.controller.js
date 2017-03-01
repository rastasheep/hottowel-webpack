import angular from 'angular';

class EventIndexController {
  /* @ngInject */
  constructor(logger) {
    this.logger = logger;
    this.title = '# TODO';
  }

  $onInit() {
    this.logger.info('Activated Event Index View');
  }
}
EventIndexController.$inject = ['logger'];

angular
  .module('app.events.eventIndex')
  .controller('EventIndexController', EventIndexController);

