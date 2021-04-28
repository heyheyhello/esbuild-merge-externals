// src/a.ts
import {css as css2} from "myexternal";
import {isLowerCase as isLowerCase2} from "is-lower-case";

// src/b.ts
import {css} from "myexternal";
import {isLowerCase} from "is-lower-case";
console.log(isLowerCase("b.ts"));
var x = css`background-color: '#fff';`;

// src/a.ts
console.log(isLowerCase2("a.ts"));
console.log(css2`color: '#fff';`);
