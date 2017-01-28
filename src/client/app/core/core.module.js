import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularSanitize from 'angular-sanitize';
import appConfig from '../config';
import blocksException from '../blocks/exception';
import blocksLogger from '../blocks/logger';
import blocksRouter from '../blocks/router';

angular
  .module('app.core', [
    angularAnimate, angularSanitize,
    blocksException, blocksLogger, blocksRouter,
    appConfig,
  ]);
