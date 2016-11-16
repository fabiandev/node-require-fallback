# node-require-fallback

Require another package in Node.js if your first choice doesn't exist.

Useful for development, where you want to use a local copy of your package,
but it shouldn't break the application for your team, which is depending an npm package.

# Installation

```bash
npm install --save node-require-fallback
```

# Example Usage

```javascript
var requireIfExists = require('node-require-fallback');

var myModule = requireIfExists('module1', 'module2');
```

`myModule` will now hold `module1` if it exists or `module2` otherwise.  
`myModule` will be `null`, if `module2` wasn't available as well.
