module.exports = function(grunt) {
    // load required grunt tasks
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // load configuration file
    var buildConfig = require('./config.js');

    // the configuration object grunt uses to give each plugin its instructions
    var taskConfig = {
        clean: [],
        compass: {
            css: {
                options: {
                    config: './compass.config.rb'
                }
            }
        },
        concat: {
            css: {
                src: [
                    '<%= vendor.css %>',
                    '<%= custom.css %>'
                ],
                dest: './styles.css'
            },
            js: {
                src: [
                    '<%= vendor.js %>',
                    '<%= custom.js %>'
                ],
                dest: './scripts.js'
            }
        },
        watch: {
            compass: {
                files: ['<%= custom.scss %>'],
                tasks: ['compass', 'concat:css']
            },
            css: {
                files: '<%= vendor.css %>',
                tasks: ['concat:css']
            },
            js: {
                files: [
                    '<%= vendor.js %>',
                    '<%= custom.js %>'
                ],
                tasks: ['concat:js']
            }
        }
    }

    grunt.initConfig(grunt.util._.extend(taskConfig, buildConfig));

    // task:product
    grunt.registerTask('product', [
        'concat:product'
    ]);

    // task:dev
    grunt.registerTask('default', [
        'compass',
        'concat:css',
        'concat:js',
        'watch'
    ]);

};
