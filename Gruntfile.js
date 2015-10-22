module.exports = function(grunt) {
  grunt.initConfig({
  	meta: {
  		banner: ' /*This is my minified app, built <%=grunt.template.today() %>*/ '
  	},
    pkg: grunt.file.readJSON('package.json'),
    uglify: {	
      build: {
        src: ['<banner>','calc/*.js'],
        dest: 'calc.min.js'
       }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
};