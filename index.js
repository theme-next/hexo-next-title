/* global hexo */

'use strict';

const fs = require('fs');
const utils = require('./utils')(hexo, __dirname);

hexo.extend.filter.register('theme_inject', injects => {
  let config = utils.defaultConfigFile('title', 'default.yml');
  if (!config.enable) return;
  injects.head.raw('title', fs.readFileSync('change-title.swig'));
  hexo.route.set(config.root + 'images/favicon-hidden.png', fs.readFileSync('favicon-hidden.png'));
});
