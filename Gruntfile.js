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
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: '.'
        }
      }
    } 
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('dist', ['sass:dist', 'copy:dist']);
}