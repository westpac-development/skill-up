/***************************************************************************************************************************************************************
 *
 * inspect html
 *
 * Inspect html element using phil walton's html inspector - @https://github.com/philipwalton/html-inspector#getting-started
 *
 **************************************************************************************************************************************************************/

module.exports = function htmlinspector(grunt) {
  var htmlinspector = {
    options: {
      parameters: 'noglobals=true'
    },
    all: {
      src: [path.join('', 'index.html')]
    }
  };

  grunt.config.set('html-inspector', htmlinspector);

};
