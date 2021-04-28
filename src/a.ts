import { css } from 'myexternal';
import { isLowerCase } from 'is-lower-case';

import { x } from './b.js';

console.log(isLowerCase('a.ts'))
console.log(css`color: '#fff';`); // I tried adding @__PURE__ as well...
console.log(x)
