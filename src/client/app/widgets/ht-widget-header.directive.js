import angular from 'angular';
import templateUrl from './widget-header.html';

angular
  .module('app.widgets')
  .directive('htWidgetHeader', htWidgetHeader);

/* @ngInject */
function htWidgetHeader() {
  //Usage:
  //<div ht-widget-header title="vm.map.title"></div>
  // Creates:
  // <div ht-widget-header=""
  //      title="Movie"
  //      allow-collapse="true" </div>
  var directive = {
    scope: {
      'title': '@',
      'subtitle': '@',
      'rightText': '@',
      'allowCollapse': '@'
    },
    templateUrl: templateUrl,
    restrict: 'EA',
    link: link
  };
  return directive;

  function link(scope, element, _attr) {
    scope.toggleContent = function() {
      if (scope.allowCollapse === 'true') {
        var content = angular.element(element).siblings('.widget-content');
        content.toggle();
      }
    };
  }
}
