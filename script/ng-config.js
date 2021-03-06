const fs = require('fs');
const path = require('path');
const _ = require('lodash');
var git = require('git-rev-sync');

const environment = process.argv[2] || 'development';
const localConfigPath = path.join(process.cwd(), 'src/client/local.environment.json');
const envConfigPath = path.join(process.cwd(), 'src/client/environment.json');
const modulePath = path.join(process.cwd(), 'src/client/app/config/index.js');
const localConfig = {
  envConfig: {
    version: git.short(),
  }
};
const envConfig = require(envConfigPath)[environment];

const compiledTemplate = _.template(`/* eslint-disable quotes */
import angular from 'angular';

angular
  .module('app.config', [])<% Object.keys(constants).forEach(function(key) { %>
  .constant('<%= key %>', <%= JSON.stringify(constants[key]) %>)<% }); %>;

export default 'app.config';

`);

try {
  Object.assign(localConfig, require(localConfigPath));
} catch (ex) {
  /* No local configuration found */
}

const ngConfig = _.merge({}, envConfig, localConfig);

fs.writeFileSync(modulePath, compiledTemplate({constants: ngConfig}), { flag: 'w' });
