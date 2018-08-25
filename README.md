# FirstAngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

To generate new project run `ng new [project_name]`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Global Library Installation
Some javascript libraries need to be added to the global scope and loaded as if they were in a script tag. We can do this using the `scripts` and `styles` options of the build target in `angular.json`.

As an example, to use [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) this is what you need to do:

First install Bootstrap from `npm`:
```
npm install jquery --save
npm install popper.js --save
npm install bootstrap --save
```
Then add the needed script files to `scripts`:
```
"scripts": [
  "node_modules/jquery/dist/jquery.slim.js",
  "node_modules/popper.js/dist/umd/popper.js",
  "node_modules/bootstrap/dist/js/bootstrap.js"
],
```
Finally add the Bootstrap CSS to the `styles` array:

```
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.css",
  "src/styles.css"
],
```
Restart `ng serve` if you're running it, and Bootstrap 4 should be working on your app.

For minimization project use compressed `min` libraries:
```
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.slim.min.js",
  "node_modules/popper.js/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```
