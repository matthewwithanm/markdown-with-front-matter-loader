var marked = require('marked');
var yaml = require('yaml-front-matter');
var loaderUtils = require('loader-utils');


module.exports = function(source) {
  this.cacheable && this.cacheable();
  var options = loaderUtils.parseQuery(this.query);
  var obj = yaml.parse(source);
  obj.__content = marked(obj.__content, options);
  return 'module.exports = ' + JSON.stringify(obj);
};
