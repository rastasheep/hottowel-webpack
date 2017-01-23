
import angular from 'angular';

angular
  .module("app.config", [])
	.constant('environment', "development")
	.constant('envConfig', {"api":{"root":"http://local.go:300/api/v1","domain":"local.go"}});
