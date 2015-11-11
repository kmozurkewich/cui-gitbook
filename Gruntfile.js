module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  
  var globalConfig = {
	  buildDir : 'build'
  };
  
  grunt.initConfig ({
	  globalConfig: globalConfig,
	  
	  clean: {
		book: ['<%= globalConfig.buildDir %>']  
	  },
	  
	  gitbook: {
		  html: {
			  input: './',
			  output: '<%= globalConfig.buildDir %>'
		  }

	  }

  });

 
  grunt.loadNpmTasks('grunt-gitbook');

  grunt.registerTask('default', ['gitbook']);
  grunt.registerTask('build', ['clean:book','gitbook']);
  
}