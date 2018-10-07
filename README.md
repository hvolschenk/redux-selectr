# redux-selectr

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
