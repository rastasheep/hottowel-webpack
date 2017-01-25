import './index';

import 'angular-mocks';
import 'bardjs/bard';

// require all modules ending in ".spec.js"
var testsContext = require.context(".", true, /.spec.js$/);
testsContext.keys().forEach(testsContext);
