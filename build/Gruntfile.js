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
                    '../themes/showgirls_ui/images/svg-icons-sprite.svg': ['icons-svg/compressed/*.svg']
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
                    '../themes/showgirls_ui/css/style.css': '../themes/showgirls_ui/less/style.less',
	            '../themes/showgirls_admin/css/style.css': '../themes/showgirls_admin/less/style.less',
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
                    '../themes/showgirls_ui/less/**/*.less',
                    '../themes/showgirls_admin/less/**/*.less'
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
