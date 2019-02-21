# redux-selectr

[![Build Status](https://travis-ci.org/hvolschenk/redux-selectr.svg?branch=master)](https://travis-ci.org/hvolschenk/redux-selectr)
[![Coverage Status](https://coveralls.io/repos/github/hvolschenk/redux-selectr/badge.svg?branch=master)](https://coveralls.io/github/hvolschenk/redux-selectr?branch=master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A redux selector reduction utility

## Installation

Install via `npm`/`yarn`:

```sh
$ npm i -S redux-selectr
```
## Usage

### Build a selector

_account-selector.js_:

```js
const account = state => ({ account: state.account });
```

### Use the selector in `mapStateToProps`

_container.js_:

```js
import connect from 'react-redux';
import reduxSelectr from 'redux-selectr';

import accountSelector from './account-selector';
import Component from './component';

const mapStateToProps = reduxSelectr(accountSelector);

export default connect(mapStateToProps)(Component);
```
