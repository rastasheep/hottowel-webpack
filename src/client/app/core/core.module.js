import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularLoadingBar from 'angular-loading-bar';
import angularSanitize from 'angular-sanitize';
import appConfig from '../config';
import appConstants from '../constants';
import blocksException from '../blocks/exception';
import blocksLogger from '../blocks/logger';
import blocksRouter from '../blocks/router';

angular
  .module('app.core', [
    angularAnimate, angularSanitize, angularLoadingBar,
    blocksException, blocksLogger, blocksRouter,
    appConfig,
  ]);
