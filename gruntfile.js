module.exports = function(grunt){

	var outputAssetsPath		= '_output/assets/';
	var outputThemesPath		= outputAssetsPath+'themes/';
	var outputPluginPath		= outputAssetsPath+'vendor/';
	
	
	//SOURCE: essential vendor
	var jquerySourcePath		= 'components/jquery/';
	var jqueryuiSourcePath		= 'components/jqueryui/';
	var bootstrapSourcePath		= 'components/bootstrap/';
	var fontAwesomeSourcePath	= 'components/font-awesome/';
	var ioniconsSourcePath		= 'ionic-team/ionicons/';
	//SOURCE: theme
	var adminLTESourcePath		= 'almasaeed2010/AdminLTE/';
	//SOURCE: extra vendor 
	var sweetAlertSourcePath	= 't4t5/sweetalert/';
	var fastClickSourcePath		= 'almasaeed2010/AdminLTE/';
	
	
	//OUTPUT:  plugin / vendor
	var jqueryOutputPath		= outputPluginPath+'jquery/';
	var jqueryuiOutputPath		= outputPluginPath+'jqueryui/';
	var bootstrapOutputPath		= outputPluginPath+'bootstrap/';
	var fontAwesomeOutputPath	= outputPluginPath+'fontawesome/';
	var ioniconsOutputPath		= outputPluginPath+'ionicons/';
	//OUTPUT: theme
	var adminLTEOutputPath		= outputThemesPath+'adminlte/';
	//OUTPUT: extra vendor 
	var fastClickOutputPath		= outputPluginPath+'fastclick/';
	var sweetAlertOutputPath	= outputPluginPath+'sweetalert/';
	
	
	var thgsToClean = [
		 bootstrapOutputPath+'js/unconcat/bootstrap*.js',
	];
	
	
	//### Configuration
	grunt.initConfig({
		//pass in options to plugins, references to files etc
		
				
		clean: {
			files : thgsToClean,
		},
		copy: {
			main: {
				files: [
				
					//bootstrap
					{expand: true, cwd:bootstrapSourcePath+'css/', src: ['*.css'], dest: bootstrapOutputPath+'css/'},
					{expand: true, cwd:bootstrapSourcePath+'js/',src: ['bootstrap*.js'], dest: bootstrapOutputPath+'js/'},
					{expand: true, cwd:bootstrapSourcePath+'js/',src: ['*.js'], dest: bootstrapOutputPath+'js/unconcat/'},
					{expand: true, cwd:bootstrapSourcePath+'fonts/',src: ['**'], dest: bootstrapOutputPath+'fonts/'},
					
						
					//fontawesome
					{expand: true, cwd:fontAwesomeSourcePath+'css/', src: ['*.css'], dest: fontAwesomeOutputPath+'css/'},
					{expand: true, cwd:fontAwesomeSourcePath+'fonts/',src: ['**'], dest: fontAwesomeOutputPath+'fonts/'},
					
					//ionicons
					{expand: true, cwd:ioniconsSourcePath+'css/', src: ['*.css'], dest: ioniconsOutputPath+'css/'},
					{expand: true, cwd:ioniconsSourcePath+'fonts/',src: ['**'], dest: ioniconsOutputPath+'fonts/'},
					
					//jquery
					{expand: true, cwd:jquerySourcePath+'',src: ['*.js'], dest: jqueryOutputPath+'js/'},
					
					//jqueryui
					{expand: true, cwd:jqueryuiSourcePath+'',src: ['*.js'], dest: jqueryuiOutputPath+'js/'},
					{expand: true, cwd:jqueryuiSourcePath+'themes/',src: ['**'], dest: jqueryuiOutputPath+'themes/'},
					
					//theme adminLTE
					{expand: true, cwd:adminLTESourcePath+'dist/img/',src: ['**'],				dest: adminLTEOutputPath+'img/'},
					{expand: true, cwd:adminLTESourcePath+'dist/css/skins/', src: ['**'],		dest: adminLTEOutputPath+'css/skins/'},
					{expand: true, cwd:adminLTESourcePath+'dist/css/', src: ['*.css'],			dest: adminLTEOutputPath+'css/'},
					{expand: true, cwd:adminLTESourcePath+'dist/js/',src: ['*.js'],				dest: adminLTEOutputPath+'js/'},
					
					//plugin fastclick
					{expand: true, cwd:fastClickSourcePath+'plugins/fastclick/',src: ['*.js'],	dest: fastClickOutputPath+'js/'},
				
					//plugin sweetalert
					{expand: true, cwd:sweetAlertSourcePath+'dist/',src: ['*.js'], dest: sweetAlertOutputPath+'js/'},
					{expand: true, cwd:sweetAlertSourcePath+'dist/',src: ['*.css'], dest: sweetAlertOutputPath+'css/'},
		
				],
			},
		},
	});

	//### Load plugins
	// grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-sass');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-contrib-cssmin');
	// grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-stripcomments');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	//### Register task
	grunt.registerTask('all-copy', ['copy']);
	grunt.registerTask('all-clean', ['clean']);

};