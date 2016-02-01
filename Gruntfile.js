module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      dist: {
        src: ['app.html', 'src/**'],
        expand: true,
        dest: 'dist/'
      }
    },
    sass: {
      dist: {
        files: {
          'css/main.css' : 'scss/*.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'scss/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('dist', ['sass:dist', 'copy:dist']);
}