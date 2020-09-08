module.exports = function () {
  return {
    autoDetect: true,
    testFramework: {
      path: 'node_modules',
      configFile: './jest.config.js'
    },
    env: {
      type: 'node'
    },
    filesWithNoCoverageCalculated: ['src/server.js', 'src/app.js'],
    debug: true
  };
};
