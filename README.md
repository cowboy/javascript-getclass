# JavaScript kindOf

Get the kind of a value. "Kind of" like [[Class]] and typeof, but better.

By default, all objects that aren't `Number`, `String`, `Boolean`, `Function`, `RegExp`, `Array`, `Date`, or `Error` will return `"Object"` unless an optional second argument is passed.

If a second argument is passed, and `true`, the global object will return `"global"` and other non-plain-objects will return their parsed [[Class]] name. The "other non-plain-objects" bit might not be reliable across all implementations, so exercise caution when using it.

Based on prior work by [Angus Croll](http://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/), [Kit Cambridge](https://gist.github.com/1317416) and [myself](https://gist.github.com/1131946).

## Getting Started

This code should work just fine in Node.js:

```javascript
var getClass = require('lib/kindof');
kindOf("foo")         // "String"
isKind(123, "Number") // true
isGlobal(global)      // true
```

Or in the browser:

```html
<script src="dist/ba-kindof.min.js"></script>
<script>
kindOf("foo")         // "String"
isKind(123, "Number") // true
isGlobal(window)      // true
</script>
```

In the browser, you can attach kindOf's methods to any object.

```html
<script>
this.exports = Bocoup.utils;
</script>
<script src="dist/ba-kindof.min.js"></script>
<script>
Bocoup.utils.kindOf("foo")         // "String"
Bocoup.utils.isKind(123, "Number") // true
Bocoup.utils.isGlobal(window)      // true
</script>
```

## Examples:

```javascript
// Null:
kindOf(null)                        // "Null"
isKind(null, "Null")                // true
isNull(null)                        // true

// Undefined:
kindOf(undefined)                   // "Undefined"
isKind(undefined, "Undefined")      // true
isUndefined(undefined)              // true

// Number (primitive or object):
kindOf(123)                         // "Number"
kindOf(Number(123))                 // "Number"
kindOf(new Number(123))             // "Number"
isKind(123, "Number")               // true
isNumber(123)                       // true

// String (primitive or object):
kindOf("foo")                       // "String"
kindOf(String("foo"))               // "String"
kindOf(new String("foo"))           // "String"
isKind("foo", "String")             // true
isString("foo")                     // true

// Boolean (primitive or object):
kindOf(true)                        // "Boolean"
kindOf(Boolean(true))               // "Boolean"
kindOf(new Boolean(true))           // "Boolean"
isKind(true, "Boolean")             // true
isBoolean(true)                     // true

// Function:
kindOf(function() {})               // "Function"
kindOf(new Function("return 1;"))   // "Function"
isKind(function() {}, "Function")   // true
isFunction(function() {})           // true

// RegExp:
kindOf(/^z?omg$/i)                  // "RegExp"
kindOf(new RegExp("^z?zomg$", "i")) // "RegExp"
isKind(/^z?omg$/i, "RegExp")        // true
isRegExp(/^z?omg$/i)                // true

// Array:
kindOf([1, 2, 3])                   // "Array"
kindOf(Array(10))                   // "Array"
kindOf(Array(1, 2, 3))              // "Array"
kindOf(new Array(10))               // "Array"
kindOf(new Array(1, 2, 3))          // "Array"
isKind([1, 2, 3], "Array")          // true
isArray([1, 2, 3])                  // true

// Date:
kindOf(new Date())                  // "Date"
isKind(new Date(), "Date")          // true
isDate(new Date())                  // true

// Error:
kindOf(new Error("foo"))            // "Error"
kindOf(new EvalError("foo"))        // "Error"
kindOf(new RangeError("foo"))       // "Error"
kindOf(new ReferenceError("foo"))   // "Error"
kindOf(new SyntaxError("foo"))      // "Error"
kindOf(new TypeError("foo"))        // "Error"
isKind(new Error("foo"), "Error")   // true
isError(new Error("foo"))           // true

// Object:
kindOf({})                          // "Object"
kindOf(new function() {})           // "Object"
kindOf(global)                      // "Object"
kindOf(JSON)                        // "Object"
kindOf(window)                      // "Object"
kindOf(document)                    // "Object"
kindOf(document.body)               // "Object"
isKind({}, "Object")                // true
isObject({})                        // true
isKind(global, "Object")            // true
isObject(global)                    // true
isKind(document, "Object")          // true
isObject(document)                  // true

// Object, specifically:
kindOf({}, {specific: true})                        // "Object"
kindOf(new function() {}, {specific: true})         // "Object"
kindOf(global, {specific: true})                    // "global"
kindOf(JSON, {specific: true})                      // "JSON"
kindOf(window, {specific: true})                    // "global"
kindOf(document, {specific: true})                  // "HTMLDocument"
kindOf(document.body, {specific: true})             // "HTMLBodyElement"
isKind(global, "Global", {specific: true})          // true
isKind(JSON, "JSON", {specific: true})              // true
isKind(document, "HTMLDocument", {specific: true})  // true
isGlobal(global)                                    // true
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
