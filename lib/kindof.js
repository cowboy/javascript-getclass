/*!
 * Copyright (c) 2011 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(exports) {
  // The `this` value inside this IIFE should refer to the global object.
  var global = this;

  // A map of basic Object.prototype.toString output to [[Class]] names. This
  // serves the dual purpose of being the object on which the Object.prototype
  // .toString method is called.
  var classMap = {};

  // Match "[object ___]" where "___" is a [[Class]] value.
  var className = /^\[object (.*)\]$/;

  // An array of basic kinds to be iterated over when building classMap and
  // the generated "is___" helper functions.
  var kinds = ["Object", "Number", "String", "Boolean", "Function", "RegExp",
    "Array", "Date", "Error"];

  var i = kinds.length;

  // Build classMap and generate "is___" helper functions.
  while (i--) {
    // An IIFE is used here to "lock in" the `kind` value inside the generated
    // helper functions.
    (function(kind) {
      if (i > 0) {
        // Add an item into classMap. Skip "Object".
        classMap["[object " + kind + "]"] = kind;
      }
      // Is the passed value of the appropriate kind?
      exports["is" + kind] = function(value) {
        return exports.kindOf(value) === kind;
      };
    }(kinds[i]));
  }

  // Is the passed value null?
  exports.isNull = function(value) {
    return value === null;
  };

  // Is the passed value undefined?
  exports.isUndefined = function(value) {
    return typeof value === "undefined";
  };

  // Is the passed value the global object?
  exports.isGlobal = function(value) {
    return value === global;
  };

  // Is the passed value of the passed kind?
  exports.isKind = function(value, kind, options) {
    return exports.kindOf(value, options) === kind;
  };

  // Return a specific useful value based on a passed object's [[Class]].
  exports.kindOf = function(value, options) {
    // Initialize options argument if not truthy.
    if (!options) {
      options = {};
    }

    if (value === null) {
      // If the passed value is null, return "Null" (IE <= 8)
      return "Null";
    } else if (value == null) {
      // If the passed value is undefined (the only value that is == null but
      // !== null is undefined), return "Undefined" (IE <= 8)
      return "Undefined";
    } else if (options.specific && value === global) {
      // If in "specific" mode, and the passed value is the global object,
      // return "Global"
      return "Global";
    }

    // Get the "[object [[Class]]]" string for the passed value.
    var key = classMap.toString.call(value);

    if (classMap.hasOwnProperty(key)) {
      // If the key exists in classMap, return its [[Class]].
      return classMap[key];
    } else if (options.specific && className.test(key)) {
      // If in "specific" mode and key matches pattern, parse the [[Class]]
      // value from the string and return that.
      return className.exec(key)[1];
    } else {
      // If not in "specific" mode or key doesn't match pattern, just return
      // the more generic "Object".
      return "Object";
    }
  };

}(typeof exports === "object" && exports || this));
