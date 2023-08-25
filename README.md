[![npm version](https://img.shields.io/npm/v/@sithusoe/baccarat-engine.svg?style=flat-square)](https://www.npmjs.com/package/@sithusoe/baccarat-engine)
![npm](https://img.shields.io/npm/dw/@sithusoe/baccarat-engine)


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

 ## Cut Cards & Burning Cards

Cut cards are part of the shoe implementation. Currently set to 16 cards before the end of the shoe, the Baccarat Game Engine will show when a burn is required.

```js
// Create game engine (8 decks default)
gameEngine = new BaccaratGameEngine();
gameEngine.shoe.createDecks();
gameEngine.shoe.shuffle();

if (gameEngine.isBurnNeeded) {
  // Burn card is the first card drawn that determined the burn cards to use.
  var burnCard = gameEngine.burnCards();
}
```

## Usage

[Sample usage](sample-usage.js)
