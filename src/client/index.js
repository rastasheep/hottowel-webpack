/*
  We must import external css from js instead of scss
  because of https://github.com/jtangelder/sass-loader/issues/164
  so we can split them later to lib.css
*/
import './styles/styles.scss';

import 'jquery';
// TODO: for b4
// import 'imports-loader?window.Tether=tether!bootstrap';
import 'bootstrap-sass/assets/javascripts/bootstrap';

import './app';
