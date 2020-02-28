module.exports = {
  "globals": {
    "React": true,
    "document": true,
    "window": true,
    "jQuery": true,
    "$": true,
    "localStorage": true,
    "fetch": true
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "plugins": [
    "import",
    "promise",
    "compat",
    "node",
    "react"
  ],
  "extends": [
    "plugin:promise/recommended",
    "standard",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 9,
    "ecmaFeatures": {
      "sourceType": "module",
      "jsx": true
    },
    "allowImportExportEverywhere": true
  },
  "rules": {
    "promise/always-return": 0,
    "promise/avoid-new": 0,
    "compat/compat": 1,
    "node/no-deprecated-api": 2,
    "node/no-extraneous-require": 2,
    "node/no-missing-require": 2,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "import/no-unresolved": [
      2,
      {
        "commonjs": true,
        "amd": true
      }
    ],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    "no-console": 0,
    "curly": 0
  }
}