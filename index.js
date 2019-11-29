/* global hexo */

'use strict';

const Util = require('next-util');
const utils = new Util(hexo, __dirname);

hexo.extend.filter.register('theme_inject', injects => {
  let config = utils.defaultConfigFile('title_change', 'default.yml');
  if (!config.enable) return;
  injects.head.raw('title', utils.getFileContent('change-title.swig'));
});
