![Starton Banner](https://github.com/starton-io/.github/blob/master/github-banner.jpg?raw=true)

# Starton - Docs

This repository contains Starton's documentation website. It is created and maintained by Starton.
Feel free to open issues in case you need to report a problem.
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Requirements

You will need :
- [NodeJS](https://nodejs.org/en) (we recommend the use of [nvm](https://github.com/nvm-sh/nvm))
- [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/)

## Installation

To install the project, first clone the repository and go inside project directory, then :

- With [yarn](https://yarnpkg.com/) :
    ```bash
    $ yarn install
    ```

- With [NPM](https://www.npmjs.com/) :
    ```bash
    $ npm install
    ```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

* `NODE_ENV` : is a system environment variable that Node exposes into running scripts
* `URL` : the URL of the documentation (example: https://docs.starton.com)
* `GTM_KEY` : [Google Tag Manager](https://developers.google.com/tag-platform/tag-manager/web/datalayer) API Key

## Run Locally

Your project is now ready to be modified by you, for that you just have to launch the project via the command below:

- With [yarn](https://yarnpkg.com/) :
    ```bash
    $ yarn dev
    ```

- With [NPM](https://www.npmjs.com/) :
    ```bash
    $ npm run dev
    ```

## Deployment

To deploy this project run :

- With [yarn](https://yarnpkg.com/) :
    ```bash
    $ yarn build
    ```

- With [NPM](https://www.npmjs.com/) :
    ```bash
    $ npm build
    ```

If the build is successful, run :

- With [yarn](https://yarnpkg.com/) :
    ```bash
    $ yarn serve
    ```

- With [NPM](https://www.npmjs.com/) :
    ```bash
    $ npm run serve
    ```

## Documentation

Find out more on how to use Starton in our [Documentation](https://docs.starton.com)

## Contributing

Contributions are always welcome!

See [Contributing](/CONTRIBUTING.md) for ways to get started.

Please adhere to Starton's [Code of Conduct](/CODE_OF_CONDUCT.md).

## License

[Apache License 2.0](/LICENSE.md)

## Authors

- Starton [support@starton.com](mailto:support@starton.com)
- Loubna Benzaama [loubna@starton.com](mailto:loubna@starton.com)
