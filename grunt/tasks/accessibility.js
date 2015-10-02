/***************************************************************************************************************************************************************
 *
 * accessibility validation and grading.
 *
 **************************************************************************************************************************************************************/

module.exports = function accessibility(grunt) {
 var accessibility = {
  accessibility: {
   options: {
    accessibilityLevel: 'WCAG2A'
   },
   test: {
    src: ['./**/*.html']
   }
  }
 };

 grunt.config.set('html-validation', accessibility);
};
