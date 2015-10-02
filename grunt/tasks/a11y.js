/***************************************************************************************************************************************************************
*
* A11y
*
* Accessibility checking
*
**************************************************************************************************************************************************************/

module.exports = function a11y(grunt) {
	var a11y = {
		options : {
			accessibilityLevel: 'WCAG2A'
		},
		test : {
			src: ['./**/*.html']
		}
	};

	grunt.config.set('accessibility', a11y);

};
