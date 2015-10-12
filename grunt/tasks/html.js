/***************************************************************************************************************************************************************
 *
 * Html validation
 *
 * Validate all html files
 *
 **************************************************************************************************************************************************************/

module.exports = function validation(grunt) {
 var validation = {
  options: {
   reset: grunt.option('reset') || false,
   stoponerror: false,
   remotePath: 'http://decodize.com/',
   remoteFiles: ['html/moving-from-wordpress-to-octopress/',
                      'css/site-preloading-methods/'], //or
   remoteFiles: 'validation-files.json', // JSON file contains array of page paths.
   relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'] //ignores these errors

  },
  files: {
   src: ["./dist/*.html"]
  }
 };

 grunt.config.set('validation', validation);
};
