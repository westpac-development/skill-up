/***************************************************************************************************************************************************************
 *
 * copy files
 *
 * copy files and folder into the distribution directory
 *
 **************************************************************************************************************************************************************/

module.exports = function copy(grunt) {
  var copy = {
    main: {
      files: [
      // includes files within path
       /* {
   expand: true,
   src: ['src/css', 'src/img', 'src/js', '*.html'],
   dest: 'dist/',
   filter: 'isFile'
 },*/

 // includes files within path and its sub-directories

        {
          expand: true,
          src: ['src/css/*.css', 'src/img/**', 'src/js/**', 'skill-repo/**', 'src/css/*.less'],
          dest: 'dist/',
          filter: 'isFile'
 },

      // makes all src relative to cwd
        {
          expand: true,
          cwd: './',
          src: ['src/css', '*.html', 'skill-repo/'],
          dest: 'dist/'
        },

    ],
    },

  };

  grunt.config.set('copy', copy);
};
