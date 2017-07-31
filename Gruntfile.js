module.exports = function(grunt) {

  grunt.initConfig({
   concat: {
      "index.js": {
         src: [
            "src/app/app.module.js",
            "src/app/app.controller.js",
            "src/app/services/**/*.js",
            "src/app/components/**/*.js"
         ],
         dest: "src/js/index.js",
         nonull: true
      }
   },
   uglify: {
         options: {
            compress: {
              drop_console: true
            }
          },
          my_target: {
            files: [{
               expand: true,
               cwd: 'src/js/',
               src: ['**/*.js'],
               dest: 'dest/js',
               ext: '.min.js',
               extDot: 'last'
            }]
          }
      },

      cssmin: {
         cssFiles : {
           files: [
            {
              expand: true,
              cwd: 'src/css',
              src: ['**/*.css'],
              dest: 'dest/css',
              ext: '.min.css',
              extDot: 'last'
            },
           ],
        },
        options: {
            compatibility:'ie7'
        }
      },

      compass: {
         dev: {
           options: {
            sassDir: 'src/sass',
            cssDir: 'src/css',
            cacheDir: 'src/sass/.sass-cache',
            noLineComments: true,
            outputStyle: 'compact'
           }
         }
      },

      copy: {
         fonts:{
            expand: true,
            cwd: 'src/fonts',
            src: ['**/*.eot','**/*.ttf','**/*.woff','**/*.woff2', '**/*.otf', '**/*.svg'],
            dest: 'dest/fonts'
         }
      },

  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('default', ['concat','uglify','copy','compass','cssmin']);

};