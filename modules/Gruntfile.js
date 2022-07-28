module.exports = function(grunt){

    const sass = require('node-sass');

    //Configs
    grunt.initConfig({

            sass: {
                options: {
                    implementation: sass,
                    sourceMap: true
                },
                dist: {
                    options: {
                        style: 'expanded'
                    },
                    files: [{
                        expand: true,
                        cwd: 'assets/scss',
                        src: ['**/*.scss'],
                        dest: 'assets/css',
                        ext: '.css'
                    }]
                }
            }
    }); 

    //Load Plugin
    grunt.loadNpmTasks("grunt-sass");

    grunt.registerTask('default', ['sass']);
};