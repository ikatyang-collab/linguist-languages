# linguist-languages

[![npm](https://img.shields.io/npm/v/linguist-languages.svg)](https://www.npmjs.com/package/linguist-languages)
[![build](https://img.shields.io/github/actions/workflow/status/ikatyang/linguist-languages/test.yml)](https://github.com/ikatyang/linguist-languages/actions?query=branch%3Amain)

[Linguist `languages.yaml`](https://github.com/github/linguist/blob/main/lib/linguist/languages.yml) data in JS format.

## Install

```sh
npm install linguist-languages
```

## Usage

Import specific language data

```js
import { JavaScript as javascript, 'F*' as FStar } from 'linguist-languages'
```

Or

```js
import javascript from 'linguist-languages/data/JavaScript'
```

> [!IMPORTANT]
> Due to file system and runtime limitation, the file location is not always the same as language name.
> Eg: `F*` data is saved in `data/F_2a_.mjs`
>
> ```js
> import FStar from 'linguist-languages/data/F_2a_'
> ```

Import all languages data

```js
import * as languages from 'linguist-languages'

const javascript = languages.JavaScript
```

## Development

```sh
# lint
pnpm run lint

# build
pnpm run build

# test
pnpm run test
```

## License

MIT © [Ika](https://github.com/ikatyang)
