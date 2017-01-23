require('./styles/styles.less')
require('./app/app.module.js');

/*
  We must import external css from js instead of scss
  because of https://github.com/jtangelder/sass-loader/issues/164
  so we can split them later to lib.css
*/


/*
TODO: remove this list by modularizing an app
*/
require('jquery');
require('angular/angular.js');
require('moment/moment.js');
require('toastr/toastr.js');
require('angular-sanitize/angular-sanitize.js');
// TODO: dirty hack, fix with https://github.com/webpack/imports-loader/pull/30
require('imports-loader?window=>{Tether:require(\'tether\')}!bootstrap');
require('angular-ui-router/release/angular-ui-router.js');
require('angular-animate/angular-animate.js');
require('angular-ui-bootstrap/dist/ui-bootstrap-tpls.js');

/* app files */
require('./app/app.module.js');
require('./app/admin/admin.module.js');
require('./app/blocks/exception/exception.module.js');
require('./app/blocks/logger/logger.module.js');
require('./app/blocks/router/router.module.js');
require('./app/core/core.module.js');
require('./app/dashboard/dashboard.module.js');
require('./app/layout/layout.module.js');
require('./app/widgets/widgets.module.js');
require('./app/admin/admin.controller.js');
require('./app/admin/admin.route.js');
require('./app/blocks/exception/exception-handler.provider.js');
require('./app/blocks/exception/exception.js');
require('./app/blocks/logger/logger.js');
require('./app/blocks/router/router-helper.provider.js');
require('./app/config/index.js');
require('./app/core/config.js');
require('./app/core/constants.js');
require('./app/core/core.route.js');
require('./app/core/dataservice.js');
require('./app/dashboard/dashboard.controller.js');
require('./app/dashboard/dashboard.route.js');
require('./app/layout/shell.directive.js');
require('./app/layout/sidebar.directive.js');
require('./app/layout/ht-sidebar.directive.js');
require('./app/layout/ht-top-nav.directive.js');
require('./app/layout/ht-top-nav.directive.js');
require('./app/layout/shell.controller.js');
require('./app/layout/sidebar.controller.js');
require('./app/widgets/ht-img-person.directive.js');
require('./app/widgets/ht-widget-header.directive.js');

