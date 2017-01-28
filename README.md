# hottowel-webpack

**Generated from HotTowel Angular**

>*Opinionated Angular style guide for teams by [@john_papa](//twitter.com/john_papa)*

>More details about the styles and patterns used in this app can be found in my [Angular Style Guide](https://github.com/johnpapa/angularjs-styleguide) and my [Angular Patterns: Clean Code](http://jpapa.me/ngclean) course at [Pluralsight](http://pluralsight.com/training/Authors/Details/john-papa) and working in teams.

## Prerequisites

1. Install [Yarn](https://yarnpkg.com/) and [Node.js](http://nodejs.org)
 - on OSX use [homebrew](http://brew.sh) `brew install node`
 - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`
  (This will also install Node.js if it is not already installed on both OSX and
   Windows)

2. Install dependencies `yarn install`

## Running HotTowel

### Code Analysis
 - `npm run vet`
    Performs static code analysis on all javascript and cssfiles. Runs
    `vet:server` `vet:client` and `vet:styles` scripts.

 - `npm run vet:server`

 - `npm run vet:client`

 - `npm run vet:styles`

 - `npm run analysis`
    Performs code analysis using plato on all javascript files. Plato generates a report in the reports folder. Runs `analysis:server` and `analysis:client`.

 - `npm run analysis:server`

 - `npm run analysis:client`

### Tests
- `npm run test`
    Runs all unit tests using karma runner, mocha, chai and sinon with phantomjs. Runs `test:server` and `test:client`.

- `npm run test:server`

- `npm run test:client`

### Serving Development Code
- `npm run serve-dev`

    Serves the development code and reloads it when nececery. The goal of building for development is to do it as fast as possible, to keep development moving efficiently.

### Building Production Code

- `npm run build`

    Optimize all javascript and styles, move to a build folder, and inject them into the new index.html

### Running the optimized code
 - Run the optimize project from the build folder with `gulp serve-build`

## Exploring HotTowel
HotTowel Angular starter project

### Structure
The structure also contains a gulpfile.js and a server folder. The server is there just so we can serve the app using node. Feel free to use any server you wish.

	/src
		/client
			/app
			/content

### The Modules
The app has 4 feature modules and depends on a series of external modules and custom but cross-app modules

```
app --> [
        app.admin --> [
            app.core,
            app.widgets
        ],
        app.dashboard --> [
            app.core,
            app.widgets
        ],
        app.layout --> [
            app.core
        ],
        app.widgets,
		app.core --> [
			ngAnimate,
			ngSanitize,
			ui.router,
			blocks.exception,
			blocks.logger,
			blocks.router
		]
    ]
```

#### core Module
Core modules are ones that are shared throughout the entire application and may be customized for the specific application. Example might be common data services.

This is an aggregator of modules that the application will need. The `core` module takes the blocks, common, and Angular sub-modules as dependencies.

#### blocks Modules
Block modules are reusable blocks of code that can be used across projects simply by including them as dependencies.

##### blocks.logger Module
The `blocks.logger` module handles logging across the Angular app.

##### blocks.exception Module
The `blocks.exception` module handles exceptions across the Angular app.

It depends on the `blocks.logger` module, because the implementation logs the exceptions.

##### blocks.router Module
The `blocks.router` module contains a routing helper module that assists in adding routes to the $routeProvider.

## License

MIT
