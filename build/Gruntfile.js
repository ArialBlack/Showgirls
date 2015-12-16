module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    
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
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // register tasks
    grunt.registerTask('default', ['less', 'watch']);
    grunt.registerTask('jenkins', ['less']);
};
