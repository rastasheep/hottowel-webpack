/* Root files */

import '!!file-loader?name=[name].[ext]!./favicon.ico';
import '!!file-loader?name=[name].[ext]!./browserconfig.xml';
import '!!file-loader?name=[name].[ext]!./android-chrome-512x512.png';
import '!!file-loader?name=[name].[ext]!./android-chrome-192x192.png';
import '!!file-loader?name=[name].[ext]!./mstile-150x150.png';
import '!!file-loader?name=[name].[ext]!./mstile-310x150.png';
import '!!file-loader?name=[name].[ext]!./mstile-310x310.png';
import '!!file-loader?name=[name].[ext]!./mstile-70x70.png';

/*
  We must import external css from js instead of scss
  because of https://github.com/jtangelder/sass-loader/issues/164
  so we can split them later to lib.css
*/
import 'toastr/toastr.scss';

import './styles/styles.scss';

import 'jquery';
import 'imports-loader?Tether=tether!bootstrap';

import './app';
