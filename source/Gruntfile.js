/* jslint es3: false */
/* global module:false, console:false, process:false */

module.exports = function(grunt) {
	
	'use strict';
	
	grunt.initConfig({
		
		pkg : grunt.file.readJSON('package.json'),
		
		bower : {
			
			install : {
				
				options : {
					
					targetDir : './files/plugins',
					cleanup : true,
					layout : 'byComponent',
					verbose : true,
					
				},
				
			},
			
		},
		
		jshint : {
			
			options : {
				
				jshintrc : '.jshintrc',
				
			},
			
			init : [
				
				'./Gruntfile.js',
				'./files/scripts/**/*',
				
			],
			
		},
		
		sass : {
			
			options : {
				
				precision : 14,
				noCache: true,
				trace: true,
				
			},
			
			dev : {
				
				options : {
					
					style : 'expanded',
					
				},
				
				files : {
					
					'./temp/<%= pkg.name %>.css' : './files/styles/rex.scss',
					'../demo/demo.css' : './files/styles/demo.scss',
					
				},
				
			},
			
			prod : {
				
				options : {
					
					style : 'compressed',
					
				},
				
				files : {
					
					'./temp/<%= pkg.name %>.min.css' : './files/styles/rex.scss',
					
				},
				
			},
			
		},
		
	});
	
	grunt.loadNpmTasks('grunt-bower-task');
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.loadNpmTasks('grunt-contrib-sass');
	
	grunt.registerTask('default', ['jshint', 'sass:prod',]);
	
};
