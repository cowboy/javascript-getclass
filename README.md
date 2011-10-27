# JavaScript getClass

Get the [[Class]] of a value.

By default, all objects that aren't `Number`, `String`, `Boolean`, `Function`, `RegExp`, `Array`, `Date`, or `Error` will return `"Object"` unless an optional second argument is passed.

If a second argument is passed, and `true`, the global object will return `"global"` and other non-plain-objects will return their parsed [[Class]] name. The "other non-plain-objects" bit might not be reliable across all implementations, so exercise caution when using it.

Based on prior work by [Angus Croll](http://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/), [Kit Cambridge](https://gist.github.com/1317416) and [myself](https://gist.github.com/1131946).

## Getting Started

This code should work just fine in Node.js:

```javascript
var getClass = require('lib/getclass').getClass;
getClass("foo") // "String"
```

Or in the browser:

```html
<script src="dist/ba-getclass.min.js"></script>
<script>
getClass("foo") // "String"
</script>
```

In the browser, you can attach getClass to any object.

```html
<script>
this.exports = Bocoup.utils;
</script>
<script src="dist/ba-getclass.min.js"></script>
<script>
Bocoup.utils.getClass("foo") // "String"
</script>
```

## Examples:

```javascript
// Null:
getClass(null)                        // "Null"

// Undefined:
getClass(undefined)                   // "Undefined"

// Number (primitive or object):
getClass(123)                         // "Number"
getClass(Number(123))                 // "Number"
getClass(new Number(123))             // "Number"

// String (primitive or object):
getClass("foo")                       // "String"
getClass(String("foo"))               // "String"
getClass(new String("foo"))           // "String"

// Boolean (primitive or object):
getClass(true)                        // "Boolean"
getClass(Boolean(true))               // "Boolean"
getClass(new Boolean(true))           // "Boolean"

// Function:
getClass(function() {})               // "Function"
getClass(new Function("return 1;"))   // "Function"

// RegExp:
getClass(/^z?omg$/i)                  // "RegExp"
getClass(new RegExp("^z?zomg$", "i")) // "RegExp"

// Array:
getClass([1, 2, 3])                   // "Array"
getClass(Array(10))                   // "Array"
getClass(Array(1, 2, 3))              // "Array"
getClass(new Array(10))               // "Array"
getClass(new Array(1, 2, 3))          // "Array"

// Date:
getClass(new Date())                  // "Date"

// Error:
getClass(new Error("foo"))            // "Error"
getClass(new EvalError("foo"))        // "Error"
getClass(new RangeError("foo"))       // "Error"
getClass(new ReferenceError("foo"))   // "Error"
getClass(new SyntaxError("foo"))      // "Error"
getClass(new TypeError("foo"))        // "Error"

// Object:
getClass({})                          // "Object"
getClass(new function() {})           // "Object"
getClass(global)                      // "Object"
getClass(JSON)                        // "Object"
getClass(window)                      // "Object"
getClass(document)                    // "Object"
getClass(document.body)               // "Object"

// Object, specifically:
getClass({}, true)                    // "Object"
getClass(new function() {}, true)     // "Object"
getClass(global, true)                // "global"
getClass(JSON, true)                  // "JSON"
getClass(window, true)                // "global"
getClass(document, true)              // "HTMLDocument"
getClass(document.body, true)         // "HTMLBodyElement"
```

## Documentation
For now, look at the unit tests.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/node-grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "lib" subdirectory!_

## Release History
Nothing official yet...

## License
Copyright (c) 2011 "Cowboy" Ben Alman  
Dual licensed under the MIT and GPL licenses.  
<http://benalman.com/about/license/>
