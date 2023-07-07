# linguist-languages

[![npm](https://img.shields.io/npm/v/linguist-languages.svg)](https://www.npmjs.com/package/linguist-languages)
[![build](https://img.shields.io/github/actions/workflow/status/ikatyang/linguist-languages/workflow.yml)](https://github.com/ikatyang/linguist-languages/actions?query=branch%3Amaster)

[Linguist `languages.yml`](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml) in JSON format

## Install

```sh
npm install linguist-languages
```

## Usage

```js
const javascript = require("linguist-languages/data/JavaScript");
```

or

```js
const javascript = require("linguist-languages").JavaScript;
```

## Development

```sh
# lint
yarn run lint

# build
yarn run build

# test
yarn run test
```

## License

MIT © [Ika](https://github.com/ikatyang)
