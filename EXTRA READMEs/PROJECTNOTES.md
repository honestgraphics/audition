# PROJECT NOTES (to be deleted before project presentation)




## To Run Server In Command Prompt:
Type either 'yarn run dev' OR 'node server/server.js'.





## All the routes are not set up yet.
### To see the Login Page:
- Go to 'client\src\components\Root\Main.js'. Change 'const loggedIn = false' to 'const loggedIn = true'.

### To see the Home Page: (at the moment this also has a table, but later the table will not be on this page but instead will be on the audition, manager approval, and database pages.)
- Go to 'client\src\components\Root\Main.js'. Change 'const loggedIn = true' to 'const loggedIn = false'.






## Dependency Explanation:
- "@babel/core": "^7.0.0-beta.51"
--Babel compiler core.

- "@babel/plugin-proposal-class-properties": "^7.0.0-beta.51"
--  This plugin transforms static class properties as well as properties declared with the property initializer syntax

- "@babel/preset-env": "^7.0.0-beta.51"
-- A Babel preset for each environment.

- "@babel/preset-react": "^7.0.0-beta.51"
-- Babel preset for all React plugins.

- "autoprefixer": "^8.6.4"
-- Autoprefixer will use the data based on current browser popularity and property support to apply prefixes for you. 

- "babel-loader": "8.0.0-beta.4"
-- This package allows transpiling JavaScript files using Babel and webpack.

- "body-parser": "^1.18.3"
-- :)

- "cors": "^2.8.4"
-- CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

- "css-loader": "^0.28.11"
-- The css-loader interprets @import and url() like import/require() and will resolve them.

- "express": "^4.16.3"
-- :)

- "extract-text-webpack-plugin": "^3.0.2"
--Extract text from a bundle, or bundles, into a separate file.

- "file-loader": "^1.1.11"
-- A file loader module for webpack

- "history": "^4.7.2"
-- history is a JavaScript library that lets you easily manage session history anywhere JavaScript runs. history abstracts away the differences in various environments and provides a minimal API that lets you manage the history stack, navigate, confirm navigation, and persist state between sessions.

- "html-webpack-plugin": "^3.2.0"
-- This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates or use your own loader.

- "mongoose": "^5.1.7"
--:)

- "node-sass": "^4.9.0"
--Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass. It allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.

- "passport": "^0.4.0"
-- Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as strategies. Passport does not mount routes or assume any particular database schema, which maximizes flexibility and allows application-level decisions to be made by the developer. The API is simple: you provide Passport a request to authenticate, and Passport provides hooks for controlling what occurs when authentication succeeds or fails.

- "passport-jwt": "^4.0.0"
--This module lets you authenticate endpoints using a JSON web token. It is intended to be used to secure RESTful endpoints without sessions.

- "passport-local": "^1.0.0"
-- This module lets you authenticate using a username and password in your Node.js applications. By plugging into Passport, local authentication can be easily and unobtrusively integrated into any application or framework that supports Connect-style middleware, including Express.

- "postcss-loader": "^2.1.5"
-- Loader for webpack to process CSS with PostCSS

- "prop-types": "^15.6.2"
--React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. 

- "react": "^16.4.1"
-- An npm package to get you immediate access to React, without also requiring the JSX transformer. This is especially useful for cases where you want to browserify your module using React.

-- Note: by default, React will be in development mode. The development version includes extra warnings about common mistakes, whereas the production version includes extra performance optimizations and strips all error messages.

-- To use React in production mode, set the environment variable NODE_ENV to production. A minifier that performs dead-code elimination such as UglifyJS is recommended to completely remove the extra code present in development mode.

- "react-dom": "^16.4.1"
-- This package serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which will be shipped as react to npm.

- "react-router-dom": "^4.3.1"
-- DOM bindings for React Router.

- "sass-loader": "^7.0.3"
-- Loads a Sass/SCSS file and compiles it to CSS.

- "style-loader": "^0.21.0"
-- Adds CSS to the DOM by injecting a <style> tag

- "webpack": "3.10.0"
-- Webpack is a module bundler, it bundles various module formats primarily so they can be run in a browser. It offers both a CLI and Node API.

- "webpack-dev-middleware": "2.0.4"
-- Webpack Dev Middleware is middleware which can be mounted in an express server to serve the latest compilation of your bundle during development. This uses webpack's Node API in watch mode and instead of outputting to the file system it outputs to memory. For comparison, you might use something like express.static instead of this middleware in production.

- "webpack-hot-middleware": "^2.22.2"
-- This allows you to add hot reloading into an existing server without webpack-dev-server.

- "winston": "^3.0.0"
-- like console log but gives more information

- "babel-plugin-transform-export-extensions": "^6.22.0"
-- Compile export extensions to ES2015