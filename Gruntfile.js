module.exports = function(grunt) {

  grunt.initConfig({
    nodewebkit: {
      options: {
        buildDir: './build', // where the build is save
        platforms: ['win', 'osx', 'linux'], // platform to build
        buildType : "versioned",
        macZip: false // app isn't zip on mac but it improve speed app
      },
      src: './app/**/*' // Your node-webkit app
    },
  });
  
  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.registerTask('default', ['nodewebkit']);

};