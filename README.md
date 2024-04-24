# Main Website for PhotoEditor

[![Deploy static content to Pages](https://github.com/BTI-US/PhotoEditor-Website/actions/workflows/static.yml/badge.svg)](https://github.com/BTI-US/PhotoEditor-Website/actions/workflows/static.yml)
[![CodeQL](https://github.com/BTI-US/PhotoEditor-Website/actions/workflows/codeql.yml/badge.svg)](https://github.com/BTI-US/PhotoEditor-Website/actions/workflows/codeql.yml)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

- Last Modified: 2024-04-23
- Author: Phill Weston

## Table of Contents

- [Main Website for PhotoEditor](#main-website-for-photoeditor)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Plugins](#plugins)
  - [Expanding the ESLint configuration](#expanding-the-eslint-configuration)
  - [License](#license)

## Introduction

This is the main website for the PhotoEditor project. It is built using React and TypeScript.

## Features

- [ ] All WalletConnect support.
- [ ]  

## Plugins

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

  ```js
  export default {
    // other rules...
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ['./tsconfig.json', './tsconfig.node.json'],
      tsconfigRootDir: __dirname,
    },
  }
  ```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.