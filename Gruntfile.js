module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        plugin: "<%= pkg.name.replace(/^jquery-/, '') %>",

        manifest: "<%= plugin %>.jquery.json",

        copyright: "(c) <%= grunt.template.today('yyyy') %>",

        clean: {
            files: ["dist", "<%= manifest %>", "bower.json"]
        },

        concat: {
            dist: {
                options: {
                    banner: "/*!\n" +
                        " * <%= pkg.title || pkg.name %> v<%= pkg.version %>\n" +
                        " * <%= pkg.homepage %>\n" +
                        " *\n" +
                        " * Copyright <%= copyright %> <%= pkg.author.name %>.\n" +
                        " * Released under the <%= pkg.licenses[0].type %> License.\n" +
                        " * <%= pkg.licenses[0].url %>\n" +
                        " */\n",
                    stripBanners: true
                },
                src: ["src/**/*.js"],
                dest: "<%= pkg.main %>"
            },
            manifest: {
                options: {
                    process: true
                },
                src: ["src/plugin.json"],
                dest: "<%= manifest %>"
            },
            bower: {
                options: {
                    process: true
                },
                src: ["src/bower.json"],
                dest: "bower.json"
            }
        },

        uglify: {
            options: {
                banner: "/*! <%= pkg.title || pkg.name %> v<%= pkg.version %> | " +
                    "<%= copyright %> <%= pkg.author.name %> | " +
                    "<%= pkg.licenses[0].type %> License */\n"
            },
            dist: {
                src: ["<%= pkg.main %>"],
                dest: "<%= pkg.main.replace(/\\.js$/, '.min.js') %>"
            }
        },

        jshint: {
            options: {
                jshintrc: true
            },
            grunt: {
                files: {
                    src: ["Gruntfile.js"]
                }
            },
            src: {
                files: {
                    src: ["src/**/*.js"]
                }
            },
            dist: {
                files: {
                    src: ["<%= pkg.main %>"]
                }
            },
            tests: {
                files: {
                    src: ["tests/**/*.js"]
                }
            }
        },

        qunit: {
            files: ["tests/**/*.html"]
        },

        watch: {
            gruntfile: {
                files: "<%= jshint.gruntfile.src %>",
                tasks: ["jshint:grunt"]
            },
            src: {
                files: "<%= jshint.src.src %>",
                tasks: ["jshint:src"]
            },
            tests: {
                files: "<%= jshint.tests.src %>",
                tasks: ["jshint:tests"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-qunit");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("dist", ["concat", "uglify"]);
    grunt.registerTask("lint", ["jshint:grunt", "jshint:src", "jshint:tests"]);
    grunt.registerTask("test", ["qunit"]);
    grunt.registerTask("default", ["dist", "jshint:dist"]);
};
