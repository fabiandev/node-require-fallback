# node-require-fallback

Require another package in Node.js if your first choice doesn't exist.

Useful for development, where you want to use a local copy of your package,
but it shouldn't break the application for your team, which is depending on a
npm package.

# Installation

```bash
npm install --save node-require-fallback
```

> Node.js >= 6 is required for this package.

# Example Usage

```javascript
var requireIfExists = require('node-require-fallback');

var myModule = requireIfExists('./module1', 'module2', 'module3');
```

You can pass as many modules to `requireIfExists` as you want.
The first one that can be found will be loaded, otherwise `null`
will be returned.
