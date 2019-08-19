const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const merge = require('lodash/merge');

function getFileContent(pluginDir, file) {
  return fs.readFileSync(pluginDir ? path.join(pluginDir, file) : file, 'utf8');
}

function defaultConfigFile(hexo, key, pluginDir, file) {
  let defaultConfig = yaml.safeLoad(getFileContent(pluginDir, file));
  hexo.config[key] = merge(defaultConfig[key], hexo.theme.config[key], hexo.config[key]);
  return hexo.config[key];
}

module.exports.getFileContent = getFileContent;
module.exports.defaultConfigFile = defaultConfigFile;
