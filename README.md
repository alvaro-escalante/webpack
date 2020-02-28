<div>
  <img height="100" src="https://cdn.rawgit.com/webpack/media/e7485eb2/logo/icon-square-big.svg">
  <img height="100" hspace='10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png">
  <img height="100" vspace='20' hspace='5' src="https://srclog.com/topics/es6.png">
  <img height="100" vspace='20' src="https://i0.wp.com/blog.alexdevero.com/wp-content/uploads/2015/03/sass-logo.jpg">
  <img height="100" vspace='20' src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg">
  <h1>React Webpack</h1>
</div>

Webpack, ES6, Sass
-------------------------------------------------

## Install

```sh
$ npm install
```

## Development

```sh
$ npm start
```

## Production

```sh
$ npm build
```

#### Tasks

|Name|Description|
|:--:|:----------|
|<a href="https://github.com/babel/babel-loader"><img width="48" height="48" title="babel-loader" src="https://worldvectorlogo.com/logos/babel-10.svg"></a>|Loads ES2015+ code and transpiles to ES5 using <a href="https://github.com/babel/babel">Babel</a>|
|<a href="https://github.com/MoOx/eslint-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/eslint.svg"></a>|PreLoader for linting code using ESLint|
|<a href="https://github.com/webpack/css-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/css-3.svg"></a>|Loads CSS file with resolved imports and returns CSS code|
|<a href="https://github.com/jtangelder/sass-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/sass-1.svg"></a>|Loads and compiles a Sass/SCSS file|
|<a href="https://github.com/postcss/postcss-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/postcss.svg"></a>|Loads and transforms a CSS/SSS file using [PostCSS](http://postcss.org)|


<h2>General usage notes</h2>

* Source files are in the `app/` director. All minified, compressed and optimised scripts, styles and assets will be outputed to the `dist` directory on development mode it will be erased

* Images should be put in `app/images/`. If the images is smaller than 10KB they will be inserted inline by `url-loader` as a Base64 string unless it is an SVG also smaller than 10KB, url encoding will be used instead. For all other images the `image-webpack-loader` would apply optimisation for png, jpg and gif images.

* All JavaScript should be in `app/scripts/**/*`. Webpack will perform `babel` transpiling, `eslint` linting, compresion and produce a bundle.min.[hash].js file and a verdor file.

* All CSS files should be in `app/styles/**/*` in scss format. Webpack will perform `stylelint` linting, compile to CSS, minify and `PostCss` will add vendor prefixes if needed. PurifyCSS will remove unused properties. 
 