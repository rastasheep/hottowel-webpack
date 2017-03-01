import angular from 'angular';
import templateUrl from './jumbotron.html';

class JumbotronController {
  $onInit() {
    this.jumbotronClass = this.background ? `widget-jumbotron__bg-${this.background}` : '';
  }
}
JumbotronController.$inject = [];

angular
  .module('widgets.jumbotron')
  .component('jumbotron', {
    controller: JumbotronController,
    templateUrl: templateUrl,
    bindings: {
      heading: '@?',
      description: '@?',
      background: '@?',
    }
  });
