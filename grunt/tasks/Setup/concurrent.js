/***************************************************************************************************************************************************************
 *
 * grunt-concurrent
 *
 * concurrent grunt tasks.
 *
 **************************************************************************************************************************************************************/

module.exports = function concurrent(grunt) {
 var concurrent = {
  target: {
   tasks: ['copy', 'copy:balajee', 'copy:preeti'],
   options: {
    logConcurrentOutput: true
   }
  }
 };

 grunt.config.set('concurrent', concurrent);
};
