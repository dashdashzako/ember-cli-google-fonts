/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-google-fonts',
  contentFor: function(type, config) {
    if (type === 'head') {
      if (config.googleFonts) {
        var families = config.googleFonts.join('|');
        return '<link href="https://fonts.googleapis.com/css?family=' + families + '" rel="stylesheet" type="text/css" media="all">';
      }
    }
  }
};
