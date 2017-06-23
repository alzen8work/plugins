module.exports = function(grunt){

	var outputAssetsPath		= '_output/assets/';
	var outputThemesPath		= outputAssetsPath+'themes/';
	var outputPluginPath		= outputAssetsPath+'plugins/';
	
	var jquerySourcePath		= 'components/jquery/';
	var jqueryuiSourcePath		= 'components/jqueryui/';
	var bootstrapSourcePath		= 'components/bootstrap/';
	var fontAwesomeSourcePath	= 'components/font-awesome/';
	var ioniconsSourcePath		= 'ionic-team/ionicons/';
	
	//other than jquery , bootstrap  , fontawesome , ionicons the rest is theme or plugin
	
	//theme
	var adminLTESourcePath		= 'almasaeed2010/AdminLTE/';
	
	//plugin
	var sweetAlertSourcePath	= 't4t5/sweetalert/';
	// var fastClickSourcePath		= 'almasaeed2010/AdminLTE/';
	
	
	//### Configuration
	grunt.initConfig({
		//pass in options to plugins, references to files etc
		
		copy: {
			main: {
				files: [
				
					//bootstrap
					{expand: true, cwd:bootstrapSourcePath+'css/', src: ['*.css'], dest: outputAssetsPath+'css/'},
					{expand: true, cwd:bootstrapSourcePath+'js/',src: ['*.js'], dest: outputAssetsPath+'js/'},
					
					//fontawesome
					{expand: true, cwd:fontAwesomeSourcePath+'css/', src: ['*.css'], dest: outputAssetsPath+'css/'},
					{expand: true, cwd:fontAwesomeSourcePath+'fonts/',src: ['**'], dest: outputAssetsPath+'fonts/'},
					
					//ionicons
					{expand: true, cwd:ioniconsSourcePath+'css/', src: ['*.css'], dest: outputAssetsPath+'css/'},
					{expand: true, cwd:ioniconsSourcePath+'fonts/',src: ['**'], dest: outputAssetsPath+'fonts/'},
					
					//jquery
					{expand: true, cwd:jquerySourcePath+'',src: ['*.js'], dest: outputAssetsPath+'js/'},
					
					//jqueryui
					{expand: true, cwd:jqueryuiSourcePath+'',src: ['*.js'], dest: outputAssetsPath+'js/'},
					{expand: true, cwd:jqueryuiSourcePath+'themes/',src: ['**'], dest: outputAssetsPath+'css/jqueryui/'},
					
					//theme adminLTE
					{expand: true, cwd:adminLTESourcePath+'dist/img/',src: ['**'],				dest: outputThemesPath+'img/'},
					{expand: true, cwd:adminLTESourcePath+'dist/css/skins/', src: ['**'],		dest: outputThemesPath+'css/skins/'},
					{expand: true, cwd:adminLTESourcePath+'dist/css/', src: ['*.css'],			dest: outputThemesPath+'css/'},
					{expand: true, cwd:adminLTESourcePath+'dist/js/',src: ['*.js'],				dest: outputThemesPath+'js/'},
					
				
					//plugin fastclick
					{expand: true, cwd:adminLTESourcePath+'plugins/fastclick/',src: ['*.js'],	dest: outputPluginPath+'fastclick/'},
				
					//plugin sweetalert
					{expand: true, cwd:sweetAlertSourcePath+'dist/',src: ['*.js'], dest: outputPluginPath+'sweetalert/'},
					{expand: true, cwd:sweetAlertSourcePath+'dist/',src: ['*.css'], dest: outputPluginPath+'sweetalert/'},
		
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
	// grunt.loadNpmTasks('grunt-contrib-clean');


	//### Register task
	grunt.registerTask('all-copy', ['copy']);

};