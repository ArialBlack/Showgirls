module.exports = function(grunt) {
    
    // fake multitask behaviour to use svgmin with a different setup for icons and images (e.g. logos)
    grunt.registerTask('svgmin_icons', 'Optimiser for SVG Icons', function() {
        grunt.config.set('svgmin', grunt.config.get('svgmin_icons'));
        grunt.task.run('svgmin');
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        clean: {
            sprite: {
                src: ['icons-svg/compressed']
            }
        },
        
         svgmin_icons: {
            options: {
                plugins: [
                    { removeDimensions: true },
                    { removeTitle: true },
                    { removeAttrs: { attrs: 'fill' } }
                ]
            },
            base: {
                expand: true,
                cwd: 'icons-svg',
                src: ['*.svg'],
                dest: 'icons-svg/compressed'
            }
        },

        svgstore: {
            icons: {
                options: {
                   // prefix : 'icon-',
                },
                files: {
                    '../themes/showgirls/images/svg-icons-sprite.svg': ['icons-svg/compressed/*.svg']
                },
            },
        },
    
        less: {
            development: {
                options: {
                    paths: ['less'],
                    compress: false,
                    cleancss: true,
                    dumpLineNumbers: 'comments'
                },
                files: {
                    '../themes/showgirls/css/style.css': '../themes/showgirls/less/style.less',
	            '../themes/ember/styles/twiks.css': '../themes/ember/less/twiks.less',
                }
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },
            
            svgstore: {
                files: [
                    'icons-svg/*.svg',
                ],
                tasks: ['svgmin_icons', 'svgstore', 'clean:sprite']
            },

            less: {
                files: [
                    '../themes/showgirls/less/**/*.less',
                    '../themes/ember/less/**/*.less'
                ],
                tasks: ['less']
            },
        },
    });

    // load npm modules
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // register tasks
    grunt.registerTask('default', [ 'clean', 'svgmin_icons', 'svgstore', 'clean:sprite', 'less', 'watch']);
    grunt.registerTask('jenkins', [ 'clean', 'svgmin_icons', 'svgstore', 'clean:sprite', 'less']);
};
