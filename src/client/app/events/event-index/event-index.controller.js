import angular from 'angular';

angular
  .module('app.events.eventIndex')
  .controller('EventIndexController', EventIndexController);

EventIndexController.$inject = ['logger'];
/* @ngInject */
function EventIndexController(logger) {
  activate();

  function activate() {
    logger.info('Activated Event Index View');
  }
}
