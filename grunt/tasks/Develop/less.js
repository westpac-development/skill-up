/***************************************************************************************************************************************************************
 *
 * less
 *
 * Compile less to css, minify and generate sourcemap
 *
 **************************************************************************************************************************************************************/

module.exports = function less(grunt) {
   var less = {
      prod: {
         options: {
            cleancss: true,
            compress: true,
            ieCompat: true,
            report: 'min',
         },
         files: {
            './dist/src/css/pretty.min.css': './dist/src/css/pretty.less'
         },
      }
   };

   grunt.config.set('less', less);

};
