
import angular from 'angular';

angular
  .module("app.config", [])
	.constant('environment', "development")
	.constant('envConfig', {"api":{"root":"http://local.go:3001","domain":"local.go"}});
