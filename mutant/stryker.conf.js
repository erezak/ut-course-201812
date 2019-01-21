module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["clear-text", "progress", "html"],
    testRunner: "mocha",
    transpilers: [],
    testFramework: "mocha",
    coverageAnalysis: "perTest",
    mochaOptions: {
	    files: "**/*.spec.js"
    },
    mutate: [
	    "*.js", 
	    '!**/*.spec.js',
      '!**/*.conf.js',
      '!node_modules'
    ]
  });
};
