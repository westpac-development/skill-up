/***************************************************************************************************************************************************************
 *
 * connect
 *
 * Open a server at the root
 *
 **************************************************************************************************************************************************************/

module.exports = function connect(grunt) {
	var connect = {
		server: {
			options: {
				port: 9000,
				base: 'dist/',
				open: true,
				livereload: true
					// keepalive: true
			}
		}
	};
	grunt.config.set('connect', connect);
};
