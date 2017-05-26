'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		// converting es6 to es5
		babel: {
			compile: {
				options: {
					sourceMap: false,
					presets: ['es2015']
				},
				files: {
					'dest/bundle.js': ['src/entry.js'],
					'dest/bundle2.js': ['src/entry2.js'],
				}
			}
		},

		// for compiling all ajvascript
		concat: {
			options: {
		      separator: ';',
		    },
	    	dist: {
	      		src: ['dest/bundle.js', 'dest/bundle2.js'],
	      		dest: 'dist/built.js',
	    	},
	  	},

	  	// for for compiling all javascript and minification of js file
	  	uglify: {
	    	my_target: {
	      		files: {
	        		'dest/output.min.js': ['dest/bundle.js', 'dest/bundle2.js'],
	      		}
	    	}
	  	}
		
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');


	grunt.registerTask('release', ['babel','uglify']);
};
