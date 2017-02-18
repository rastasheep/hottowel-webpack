import angular from 'angular';
import blocksRouter from '../blocks/router';
import bootstrapCollapse from 'angular-ui-bootstrap/src/collapse';
import widgetsJumbotron from '../widgets/jumbotron';

angular.module('app.layout', [
  blocksRouter,
  bootstrapCollapse,
  widgetsJumbotron,
]);
