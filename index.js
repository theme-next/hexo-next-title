/* global hexo */

'use strict';

const utils = require('./utils');

hexo.extend.filter.register('theme_inject', injects => {
  let config = utils.defaultConfigFile(hexo, 'title_change', __dirname, 'default.yml');
  if (!config.enable) return;
  injects.head.raw('title', utils.getFileContent(__dirname, 'change-title.swig'));
});
