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
  - [How to configure the website](#how-to-configure-the-website)
    - [Required Environment Variables](#required-environment-variables)
    - [WalletConnect API](#walletconnect-api)
  - [Roadmap](#roadmap)
  - [Setting Up for Mail Subscription Service](#setting-up-for-mail-subscription-service)
  - [Plugins](#plugins)
  - [Expanding the ESLint configuration](#expanding-the-eslint-configuration)
  - [License](#license)

## Introduction

This is the main website for the PhotoEditor project. It is built using React and TypeScript.

## Features

## How to configure the website

### Required Environment Variables

The following environment variables are required to run the website:

**Note:** The environment variables used for vite should be prefixed with `VITE_`.

|Env Name|Ignorable|Description|
|-|-|-|
|`VITE_WALLETCONNECT_PROJECT_ID`|Essential|The WalletConnect project ID.|
|`VITE_EMAIL_TOKEN`|Essential|The EmailJS token.|
|`VITE_EMAIL_SERVICE_ID`|Essential|The EmailJS service ID.|
|`VITE_EMAIL_TEMPLATE`|Essential|The EmailJS template ID for subscription.|
|`VITE_CONTACT_EMAIL_TEMPLATE`|Essential|The EmailJS template ID for contact.|
|`VITE_ACTIVE_NETWORK`|Essential|The active network for the WalletConnect API.|
|`VITE_AUTH_WEB_ADDRESS`|Essential|The authentication web address for the website.|

### WalletConnect API

Refer to the [Web3Modal SDK for React](https://docs.walletconnect.com/web3modal/react/about?platform=wagmi) for more information.

## Roadmap

- [x] Add WalletConnect support and address display.
- [ ] Add activation code generation request and respond to the webpage.
- [ ] Add Email subscription service (using EmailJS and Postcard).

## Setting Up for Mail Subscription Service

Here is the detailed step about how to configure the backend mail server for GitHub Pages (or other web services that only support frontend pages).

1. Generate HTML Mail Template (Postcards)
    
    [Postcards - Designmodo](https://designmodo.com/postcards/app/)
    
    After editing the contents, export as a ZIP file with the images and HTML files together.
    
2. Domain Email Account Registration and SMTP Server Setting
    
    [GoDaddy Webmail](https://email.godaddy.com/)
    
3. Use EmailJS for Email Backend Service
    
    Basic Setting
    
    [Send email directly from your code | EmailJS](https://www.emailjs.com/)
    
    REST API Documentation
    
    [/send API | EmailJS](https://www.emailjs.com/docs/rest-api/send/)
    
    Note: 
    
    - SMTP.js only supports elasticemail as its backend SMTP mail server, no third-party SMTP server is supported.
    - The limitation of the content body of EmailJS is no more than 50kb, be sure the size of the HTML file is less than the threshold.
    - We can use the following website to shrink the size of the HTML file by removing the unnecessary characters (like white space, etc)
        
        [HTML Compressor - Reduce the size of HTML, CSS, JavaScript, PHP and Smarty code.](https://htmlcompressor.com/compressor/)
        
4. Backblaze B2 OBS Bucket for Image Storage
    
    We need to upload the images extracted from the downloaded ZIP file to the OBS bucket and replace all of the image paths from the relative path to the HTTPS path, which can be obtained through the detailed property of the file in the OBS bucket.

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