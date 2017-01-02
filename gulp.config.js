module.exports = function() {
  var client = './src/client/';
  var server = './src/server/';
  var clientApp = client + 'app/';
  var report = './report/';
  var root = './';
  var specRunnerFile = 'specs.html';
  var temp = './.tmp/';
  var nodeModules = 'node_modules';

  var config = {
    /**
     * File paths
     */
    // all javascript that we want to vet
    alljs: [
      './src/**/*.js',
      './*.js'
    ],
    build: './build/',
    client: client,
    css: temp + 'styles.css',
    fonts: 'node_modules/font-awesome/fonts/**/*.*',
    html: client + '**/*.html',
    htmltemplates: clientApp + '**/*.html',
    images: client + 'images/**/*.*',
    index: client + 'index.html',
    // app js, with no specs
    js: [
      clientApp + '**/*.module.js',
      clientApp + '**/*.js',
      '!' + clientApp + '**/*.spec.js'
    ],
    jsOrder: [
      '**/app.module.js',
      '**/*.module.js',
      '**/*.js'
    ],
    less: client + 'styles/styles.less',
    report: report,
    root: root,
    server: server,
    source: 'src/',
    stubsjs: [
      'node_modules/angular-mocks/angular-mocks.js',
      client + 'stubs/**/*.js'
    ],
    temp: temp,

    /**
     * optimized files
     */
    optimized: {
      app: 'app.js',
      lib: 'lib.js'
    },

    /**
     * plato
     */
    plato: { js: clientApp + '**/*.js' },

    /**
     * browser sync
     */
    browserReloadDelay: 1000,

    /**
     * template cache
     */
    templateCache: {
      file: 'templates.js',
      options: {
        module: 'app.core',
        root: 'app/',
        standalone: false
      }
    },

    /**
     * NPM files
     */
    packages: [
      './package.json',
    ],

    /**
     * specs.html, our HTML spec runner
     */
    specRunner: client + specRunnerFile,
    specRunnerFile: specRunnerFile,

    /**
     * The sequence of the injections into specs.html:
     *  1 testlibraries
     *      mocha setup
     *  2 js
     *  3 spechelpers
     *  4 specs
     *  5 templates
     */
    testlibraries: [
      nodeModules + '/mocha/mocha.js',
      nodeModules + '/chai/chai.js',
      nodeModules + '/sinon-chai/lib/sinon-chai.js'
    ],
    specHelpers: [client + 'test-helpers/*.js'],
    specs: [clientApp + '**/*.spec.js'],
    serverIntegrationSpecs: [client + '/tests/server-integration/**/*.spec.js'],

    /**
     * Node settings
     */
    nodeServer: server + 'app.js',
    defaultPort: '8001',

    /**
     * Dependency files, until webpack
     */
    depFiles: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-sanitize/angular-sanitize.js',
      'node_modules/bootstrap/dist/js/bootstrap.js',
      'node_modules/moment/moment.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'node_modules/toastr/toastr.js',
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
      'node_modules/bardjs/dist/bard.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/sinon/pkg/sinon.js',
    ]
  };

  /**
   * karma settings
   */
  config.karma = getKarmaOptions();

  return config;

  ////////////////

  function getKarmaOptions() {
    var options = {
      files: [].concat(
        config.depFiles,
        config.specHelpers,
        clientApp + '**/*.module.js',
        clientApp + '**/*.js',
        temp + config.templateCache.file,
        config.serverIntegrationSpecs
      ),
      exclude: [],
      coverage: {
        dir: report + 'coverage',
        reporters: [
          // reporters not supporting the `file` property
          { type: 'html', subdir: 'report-html' },
          { type: 'lcov', subdir: 'report-lcov' },
          { type: 'text-summary' } //, subdir: '.', file: 'text-summary.txt'}
        ]
      },
      preprocessors: {}
    };
    options.preprocessors[clientApp + '**/!(*.spec)+(.js)'] = ['coverage'];
    return options;
  }
};
