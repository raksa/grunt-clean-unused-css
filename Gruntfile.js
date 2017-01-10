module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uncss: {
	  dist: {
		files: {
		  'dist/site.css': ['html/index.html', 'html/FAQs.html', 'html/Prizes.html']
		}
	  }
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-uncss');

  // Default task(s).
  grunt.registerTask('default', ['uncss']);

};