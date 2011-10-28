/*global require:true */
/*jshint evil:true */
var _ = require('../lib/kindof');

// To avoid JSHint compaints.
var MyNumber = Number;
var MyString = String;
var MyBoolean = Boolean;
var _Array = Array;

exports["kindOf (non-specific)"] = {
  "Null": function(test) {
    test.expect(1);
    test.strictEqual(_.kindOf(null), "Null", "should work");
    test.done();
  },
  "Undefined": function(test) {
    test.expect(2);
    test.strictEqual(_.kindOf(undefined), "Undefined", "should work");
    test.strictEqual(_.kindOf(), "Undefined", "should work");
    test.done();
  },
  "Number": function(test) {
    test.expect(5);
    test.strictEqual(_.kindOf(123), "Number", "should work");
    test.strictEqual(_.kindOf(Number(123)), "Number", "should work");
    test.strictEqual(_.kindOf(new MyNumber(123)), "Number", "should work");
    test.strictEqual(_.kindOf(NaN), "Number", "should work");
    test.strictEqual(_.kindOf(Infinity), "Number", "should work");
    test.done();
  },
  "String": function(test) {
    test.expect(3);
    test.strictEqual(_.kindOf("foo"), "String", "should work");
    test.strictEqual(_.kindOf(String("foo")), "String", "should work");
    test.strictEqual(_.kindOf(new MyString("foo")), "String", "should work");
    test.done();
  },
  "Boolean": function(test) {
    test.expect(6);
    test.strictEqual(_.kindOf(true), "Boolean", "should work");
    test.strictEqual(_.kindOf(Boolean(true)), "Boolean", "should work");
    test.strictEqual(_.kindOf(new MyBoolean(true)), "Boolean", "should work");
    test.strictEqual(_.kindOf(false), "Boolean", "should work");
    test.strictEqual(_.kindOf(Boolean(false)), "Boolean", "should work");
    test.strictEqual(_.kindOf(new MyBoolean(false)), "Boolean", "should work");
    test.done();
  },
  "Function": function(test) {
    test.expect(3);
    function fn1() {}
    var fn2 = function() {};
    var fn3 = new Function("return 1;");
    test.strictEqual(_.kindOf(fn1), "Function", "should work");
    test.strictEqual(_.kindOf(fn2), "Function", "should work");
    test.strictEqual(_.kindOf(fn3), "Function", "should work");
    test.done();
  },
  "RegExp": function(test) {
    test.expect(2);
    var re1 = /foo/;
    var re2 = new RegExp("foo");
    test.strictEqual(_.kindOf(re1), "RegExp", "should work");
    test.strictEqual(_.kindOf(re2), "RegExp", "should work");
    test.done();
  },
  "Array": function(test) {
    test.expect(5);
    test.strictEqual(_.kindOf([1, 2, 3]), "Array", "should work");
    test.strictEqual(_.kindOf(_Array(10)), "Array", "should work");
    test.strictEqual(_.kindOf(_Array(1, 2, 3)), "Array", "should work");
    test.strictEqual(_.kindOf(new Array(10)), "Array", "should work");
    test.strictEqual(_.kindOf(new Array(1, 2, 3)), "Array", "should work");
    test.done();
  },
  "Date": function(test) {
    test.expect(1);
    test.strictEqual(_.kindOf(new Date()), "Date", "should work");
    test.done();
  },
  "Error": function(test) {
    test.expect(6);
    test.strictEqual(_.kindOf(new Error("foo")), "Error", "should work");
    test.strictEqual(_.kindOf(new EvalError("foo")), "Error", "should work");
    test.strictEqual(_.kindOf(new RangeError("foo")), "Error", "should work");
    test.strictEqual(_.kindOf(new ReferenceError("foo")), "Error", "should work");
    test.strictEqual(_.kindOf(new SyntaxError("foo")), "Error", "should work");
    test.strictEqual(_.kindOf(new TypeError("foo")), "Error", "should work");
    test.done();
  },
  "Object": function(test) {
    test.expect(4);
    function Foo() {}
    test.strictEqual(_.kindOf(new Foo()), "Object", "should work");
    test.strictEqual(_.kindOf({}), "Object", "should work");
    test.strictEqual(_.kindOf(global), "Object", "should work");
    test.strictEqual(_.kindOf(arguments), "Object", "should work");
    test.done();
  }
};

exports["kindOf (specific)"] = {
  "Null": function(test) {
    test.expect(1);
    test.strictEqual(_.kindOf(null, {specific: true}), "Null", "should work");
    test.done();
  },
  "Undefined": function(test) {
    test.expect(1);
    test.strictEqual(_.kindOf(undefined, {specific: true}), "Undefined", "should work");
    test.done();
  },
  "Number": function(test) {
    test.expect(5);
    test.strictEqual(_.kindOf(123, {specific: true}), "Number", "should work");
    test.strictEqual(_.kindOf(Number(123), {specific: true}), "Number", "should work");
    test.strictEqual(_.kindOf(new MyNumber(123), {specific: true}), "Number", "should work");
    test.strictEqual(_.kindOf(NaN, {specific: true}), "Number", "should work");
    test.strictEqual(_.kindOf(Infinity, {specific: true}), "Number", "should work");
    test.done();
  },
  "String": function(test) {
    test.expect(3);
    test.strictEqual(_.kindOf("foo", {specific: true}), "String", "should work");
    test.strictEqual(_.kindOf(String("foo"), {specific: true}), "String", "should work");
    test.strictEqual(_.kindOf(new MyString("foo"), {specific: true}), "String", "should work");
    test.done();
  },
  "Boolean": function(test) {
    test.expect(6);
    test.strictEqual(_.kindOf(true, {specific: true}), "Boolean", "should work");
    test.strictEqual(_.kindOf(Boolean(true), {specific: true}), "Boolean", "should work");
    test.strictEqual(_.kindOf(new MyBoolean(true), {specific: true}), "Boolean", "should work");
    test.strictEqual(_.kindOf(false, {specific: true}), "Boolean", "should work");
    test.strictEqual(_.kindOf(Boolean(false), {specific: true}), "Boolean", "should work");
    test.strictEqual(_.kindOf(new MyBoolean(false), {specific: true}), "Boolean", "should work");
    test.done();
  },
  "Function": function(test) {
    test.expect(3);
    function fn1() {}
    var fn2 = function() {};
    var fn3 = new Function("return 1;");
    test.strictEqual(_.kindOf(fn1, {specific: true}), "Function", "should work");
    test.strictEqual(_.kindOf(fn2, {specific: true}), "Function", "should work");
    test.strictEqual(_.kindOf(fn3, {specific: true}), "Function", "should work");
    test.done();
  },
  "RegExp": function(test) {
    test.expect(2);
    var re1 = /foo/;
    var re2 = new RegExp("foo");
    test.strictEqual(_.kindOf(re1, {specific: true}), "RegExp", "should work");
    test.strictEqual(_.kindOf(re2, {specific: true}), "RegExp", "should work");
    test.done();
  },
  "Array": function(test) {
    test.expect(5);
    test.strictEqual(_.kindOf([1, 2, 3], {specific: true}), "Array", "should work");
    test.strictEqual(_.kindOf(_Array(10), {specific: true}), "Array", "should work");
    test.strictEqual(_.kindOf(_Array(1, 2, 3), {specific: true}), "Array", "should work");
    test.strictEqual(_.kindOf(new Array(10), {specific: true}), "Array", "should work");
    test.strictEqual(_.kindOf(new Array(1, 2, 3), {specific: true}), "Array", "should work");
    test.done();
  },
  "Date": function(test) {
    test.expect(1);
    test.strictEqual(_.kindOf(new Date(), {specific: true}), "Date", "should work");
    test.done();
  },
  "Error": function(test) {
    test.expect(6);
    test.strictEqual(_.kindOf(new Error("foo"), {specific: true}), "Error", "should work");
    test.strictEqual(_.kindOf(new EvalError("foo"), {specific: true}), "Error", "should work");
    test.strictEqual(_.kindOf(new RangeError("foo"), {specific: true}), "Error", "should work");
    test.strictEqual(_.kindOf(new ReferenceError("foo"), {specific: true}), "Error", "should work");
    test.strictEqual(_.kindOf(new SyntaxError("foo"), {specific: true}), "Error", "should work");
    test.strictEqual(_.kindOf(new TypeError("foo"), {specific: true}), "Error", "should work");
    test.done();
  },
  "global": function(test) {
    test.expect(1);
    test.strictEqual(_.kindOf(global, {specific: true}), "Global", "should work");
    test.done();
  },
  "Object": function(test) {
    test.expect(2);
    function Foo() {}
    test.strictEqual(_.kindOf(new Foo(), {specific: true}), "Object", "should work");
    test.strictEqual(_.kindOf({}, {specific: true}), "Object", "should work");
    test.done();
  },
  "Specific": function(test) {
    test.expect(2);
    test.strictEqual(_.kindOf(arguments, {specific: true}), "Arguments", "should work");
    test.strictEqual(_.kindOf(JSON, {specific: true}), "JSON", "should work");
    test.done();
  }
};

exports["isKind"] = {
  "non-specific": function(test) {
    test.expect(5);
    test.ok(_.isKind(null, "Null"), "should work");
    test.ok(_.isKind(undefined, "Undefined"), "should work");
    test.ok(_.isKind(123, "Number"), "should work");
    test.ok(_.isKind("foo", "String"), "should work");
    test.ok(_.isKind(global, "Object"), "should work");
    test.done();
  },
  "specific": function(test) {
    test.expect(2);
    test.ok(_.isKind(global, "Global", {specific: true}), "should work");
    test.ok(_.isKind(arguments, "Arguments", {specific: true}), "should work");
    test.done();
  }
};

exports["generated helpers"] = {
  "isNumber": function(test) {
    test.expect(5);
    test.ok(_.isNumber(123), "should work");
    test.ok(_.isNumber(Number(123)), "should work");
    test.ok(_.isNumber(new MyNumber(123)), "should work");
    test.ok(_.isNumber(NaN), "should work");
    test.ok(_.isNumber(Infinity), "should work");
    test.done();
  },
  "isString": function(test) {
    test.expect(3);
    test.ok(_.isString("foo"), "should work");
    test.ok(_.isString(String("foo")), "should work");
    test.ok(_.isString(new MyString("foo")), "should work");
    test.done();
  },
  "isBoolean": function(test) {
    test.expect(6);
    test.ok(_.isBoolean(true), "should work");
    test.ok(_.isBoolean(Boolean(true)), "should work");
    test.ok(_.isBoolean(new MyBoolean(true)), "should work");
    test.ok(_.isBoolean(false), "should work");
    test.ok(_.isBoolean(Boolean(false)), "should work");
    test.ok(_.isBoolean(new MyBoolean(false)), "should work");
    test.done();
  },
  "isFunction": function(test) {
    test.expect(3);
    function fn1() {}
    var fn2 = function() {};
    var fn3 = new Function("return 1;");
    test.ok(_.isFunction(fn1), "should work");
    test.ok(_.isFunction(fn2), "should work");
    test.ok(_.isFunction(fn3), "should work");
    test.done();
  },
  "isRegExp": function(test) {
    test.expect(2);
    var re1 = /foo/;
    var re2 = new RegExp("foo");
    test.ok(_.isRegExp(re1), "should work");
    test.ok(_.isRegExp(re2), "should work");
    test.done();
  },
  "isArray": function(test) {
    test.expect(5);
    test.ok(_.isArray([1, 2, 3]), "should work");
    test.ok(_.isArray(_Array(10)), "should work");
    test.ok(_.isArray(_Array(1, 2, 3)), "should work");
    test.ok(_.isArray(new Array(10)), "should work");
    test.ok(_.isArray(new Array(1, 2, 3)), "should work");
    test.done();
  },
  "isDate": function(test) {
    test.expect(1);
    test.ok(_.isDate(new Date()), "should work");
    test.done();
  },
  "isError": function(test) {
    test.expect(6);
    test.ok(_.isError(new Error("foo")), "should work");
    test.ok(_.isError(new EvalError("foo")), "should work");
    test.ok(_.isError(new RangeError("foo")), "should work");
    test.ok(_.isError(new ReferenceError("foo")), "should work");
    test.ok(_.isError(new SyntaxError("foo")), "should work");
    test.ok(_.isError(new TypeError("foo")), "should work");
    test.done();
  },
  "isObject": function(test) {
    test.expect(4);
    function Foo() {}
    test.ok(_.isObject(new Foo()), "should work");
    test.ok(_.isObject({}), "should work");
    test.ok(_.isObject(global), "should work");
    test.ok(_.isObject(arguments), "should work");
    test.done();
  },
  "isGlobal": function(test) {
    test.expect(2);
    test.ok(_.isGlobal(global), "should work");
    test.strictEqual(_.isGlobal({}), false, "shouldn't work");
    test.done();
  }
};

