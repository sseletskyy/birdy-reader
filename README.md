#Learning by doing

##Install yeoman
> npm install -g yo
Install yeoman generator for Angular
> npm install -g generator-angular-jade-stylus
Install grunt
> npm install -g grunt


##Generate an app
Create dir
> mkdir app
> cd app

##Create project
> yo angular-jade-stylus --coffee --jade --stylus app-name

##Start development server
> grunt serve                         

##Using yo generator
### Stop grunt server
### Generate a new route (route, controller, view and test)
> yo angular-jade-stylus (aka angular-jade-stylus:app)
> yo angular-jade-stylus:controller
> yo angular-jade-stylus:directive
> yo angular-jade-stylus:filter
> yo angular-jade-stylus:route
> yo angular-jade-stylus:service
> yo angular-jade-stylus:provider
> yo angular-jade-stylus:factory
> yo angular-jade-stylus:value
> yo angular-jade-stylus:constant
> yo angular-jade-stylus:decorator
> yo angular-jade-stylus:view

More details at https://www.npmjs.org/package/generator-angular-jade-stylus

##Configure karma

Open Gruntfile.js
Find string 'karma.conf.js' and change to 'test/karma.conf.js'

$ npm install karma-jasmine karma-chrome-launcher karma-coverage --save-dev
/*$ npm install --save-dev karma-coffee-preprocessor*/

In karma.conf.js
    add 'karma-coverage' in plugins array
    add 
        reporters: ['progress', 'coverage'],
        preprocessors: {
            '**/*.js': 'coverage'
        }
