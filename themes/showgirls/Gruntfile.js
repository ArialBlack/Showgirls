module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
                    compress: false,
                    cleancss: true,
                    dumpLineNumbers: 'comments'   
        },
        files: {
          "css/style.css": "css/less/main.less" // destination file and source file
        }
      }
    },
  sprite:{
      all: {
        src: 'images/sprite/*.png',
        dest: 'images/spritesheet.png',
        destCss: 'css/sprites.css'
      }
    },

    watch: {
      styles: {
        files: ['css/less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
                    compress: false,
                    cleancss: true,
                    dumpLineNumbers: 'comments'
        }
      }
    }

  });

  grunt.registerTask('default', ['less', 'watch']);
  grunt.loadNpmTasks('grunt-spritesmith');
};