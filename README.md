Arasaac frontend: React (redux) app
==========================================

What it will (should) be? 
* Universal/Isomorphic ReactJS App.  T
* The new release for [Arasaac Web](http://www.arasaac.org)

Current status: In development. Using redux for application-state management.


## Features

* [React](https://github.com/facebook/react) (`^0.14.0`)
  * Includes react-addons-test-utils (`^0.14.0`)
* [Redux](https://github.com/rackt/redux) (`^3.0.0`)
  * react-redux (`^4.0.0`)
  * redux-devtools
    * use `npm run dev:nw` to display them in a separate window.
  * redux-thunk middleware
* [react-router](https://github.com/rackt/react-router) (`^2.0.0-rc5`)
* [redux-simple-router](https://github.com/rackt/redux-simple-router) (`^1.0.0`)
* [Material-ui](https://github.com/callemall/material-ui)
* [React Intl plugin for Localization](https://github.com/yahoo/react-intl)
* [Webpack](https://github.com/webpack/webpack)
  * [CSS modules!](https://github.com/css-modules/css-modules)
  * sass-loader
  * postcss-loader with cssnano for style autoprefixing and minification
  * Bundle splitting for app and vendor dependencies
  * CSS extraction during builts that are not using HMR (like `npm run compile`)
  * Loaders for fonts and images
* [Koa](https://github.com/koajs/koa) (`^2.0.0-alpha`)
  * webpack-dev-middleware
  * webpack-hot-middleware
* [Karma](https://github.com/karma-runner/karma)
  * Mocha w/ chai, sinon-chai, and chai-as-promised
  * PhantomJS
  * Code coverage reports
* [Babel](https://github.com/babel/babel) (`^6.3.0`)
  * [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime) so transforms aren't inlined
  * [babel-preset-react-hmre](https://github.com/danmartinez101/babel-preset-react-hmre) for:
    * react-transform-hmr (HMR for React components)
    * redbox-react (visible error reporting for React components)
* [ESLint](http://eslint.org)
  * Uses [Standard Style](https://github.com/feross/standard) by default, but you're welcome to change this!
  * Includes separate test-specific `.eslintrc` to work with Mocha and Chai

## Installation

Getting Started
---------------

Just clone the repo and install the necessary node modules:

```shell
$ git clone git@github.com:juanda99/react-redux-material-ui.git
$ cd react-redux-starter-kit
$ npm install                   # Install Node modules listed in ./package.json (may take a while the first time)
$ npm start                     # Compile and launch
```

### I18n support

All messages in this website are localized and rendered using `react-intl@2.0`.

There is also a [babel plugin](https://github.com/yahoo/babel-plugin-react-intl) to extract all the default messages into `./_translations/lib` to be provided to translators.

```bash
$ npm run build:i18n
```

You can also run a script to extract all those translations as key-value.

```bash
$ npm run build:i18n:langs
```


#### Thanks

- [Emmenko react redux example](https://github.com/emmenko/redux-react-router-async-example) for the integration of React Intl.
- [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit) for the awesome boilerplate
- [Material-ui](https://github.com/callemall/material-ui) for the ui components


