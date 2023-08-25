# Modified Baccarat Engine
This module is the modified version of baccarat-engine from [jconradi](<https://github.com/jconradi>) and [events](<https://github.com/browserify/events>).

Credits to [baccarat-engine](<https://github.com/jconradi/baccarat-engine>) and [events](<https://github.com/browserify/events>).

## Why don't use existing module
The original module works fine for the projects which uses Node.js environment like react.

But in my case, [Laya air](<https://layaair.layabox.com/#/>) project which don't use Node.js environment.

I get error which caused by shoe.js.

In shoe.js
```js
const EventEmitter = require('events');
```

```error
Uncaught Error: Dynamic require of "events" is not supported
    at bundle.js:33:11
```

 For that case, I adjusted using baccarat-engine and events.