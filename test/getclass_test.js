/*global require:true */
/*jshint evil:true */
var getClass = require('../lib/getclass').getClass;
var _global = (function() { return this; }());

// To avoid JSHint compaints.
var MyNumber = Number;
var MyString = String;
var MyBoolean = Boolean;
var _Array = Array;

exports["non-specific"] = {
  "Null": function(test) {
    test.expect(1);
    test.strictEqual(getClass(null), "Null", "should work");
    test.done();
  },
  "Undefined": function(test) {
    test.expect(2);
    test.strictEqual(getClass(undefined), "Undefined", "should work");
    test.strictEqual(getClass(), "Undefined", "should work");
    test.done();
  },
  "Number": function(test) {
    test.expect(5);
    test.strictEqual(getClass(123), "Number", "should work");
    test.strictEqual(getClass(Number(123)), "Number", "should work");
    test.strictEqual(getClass(new MyNumber(123)), "Number", "should work");
    test.strictEqual(getClass(NaN), "Number", "should work");
    test.strictEqual(getClass(Infinity), "Number", "should work");
    test.done();
  },
  "String": function(test) {
    test.expect(3);
    test.strictEqual(getClass("foo"), "String", "should work");
    test.strictEqual(getClass(String("foo")), "String", "should work");
    test.strictEqual(getClass(new MyString("foo")), "String", "should work");
    test.done();
  },
  "Boolean": function(test) {
    test.expect(6);
    test.strictEqual(getClass(true), "Boolean", "should work");
    test.strictEqual(getClass(Boolean(true)), "Boolean", "should work");
    test.strictEqual(getClass(new MyBoolean(true)), "Boolean", "should work");
    test.strictEqual(getClass(false), "Boolean", "should work");
    test.strictEqual(getClass(Boolean(false)), "Boolean", "should work");
    test.strictEqual(getClass(new MyBoolean(false)), "Boolean", "should work");
    test.done();
  },
  "Function": function(test) {
    test.expect(3);
    function fn1() {}
    var fn2 = function() {};
    var fn3 = new Function("return 1;");
    test.strictEqual(getClass(fn1), "Function", "should work");
    test.strictEqual(getClass(fn2), "Function", "should work");
    test.strictEqual(getClass(fn3), "Function", "should work");
    test.done();
  },
  "RegExp": function(test) {
    test.expect(2);
    var re1 = /foo/;
    var re2 = new RegExp("foo");
    test.strictEqual(getClass(re1), "RegExp", "should work");
    test.strictEqual(getClass(re2), "RegExp", "should work");
    test.done();
  },
  "Array": function(test) {
    test.expect(5);
    test.strictEqual(getClass([1, 2, 3]), "Array", "should work");
    test.strictEqual(getClass(_Array(10)), "Array", "should work");
    test.strictEqual(getClass(_Array(1, 2, 3)), "Array", "should work");
    test.strictEqual(getClass(new Array(10)), "Array", "should work");
    test.strictEqual(getClass(new Array(1, 2, 3)), "Array", "should work");
    test.done();
  },
  "Date": function(test) {
    test.expect(1);
    test.strictEqual(getClass(new Date()), "Date", "should work");
    test.done();
  },
  "Error": function(test) {
    test.expect(6);
    test.strictEqual(getClass(new Error("foo")), "Error", "should work");
    test.strictEqual(getClass(new EvalError("foo")), "Error", "should work");
    test.strictEqual(getClass(new RangeError("foo")), "Error", "should work");
    test.strictEqual(getClass(new ReferenceError("foo")), "Error", "should work");
    test.strictEqual(getClass(new SyntaxError("foo")), "Error", "should work");
    test.strictEqual(getClass(new TypeError("foo")), "Error", "should work");
    test.done();
  },
  "Object": function(test) {
    test.expect(4);
    function Foo() {}
    test.strictEqual(getClass(new Foo()), "Object", "should work");
    test.strictEqual(getClass({}), "Object", "should work");
    test.strictEqual(getClass(_global), "Object", "should work");
    test.strictEqual(getClass(arguments), "Object", "should work");
    test.done();
  }
};

exports["specific"] = {
  "Null": function(test) {
    test.expect(1);
    test.strictEqual(getClass(null, {specific: true}), "Null", "should work");
    test.done();
  },
  "Undefined": function(test) {
    test.expect(1);
    test.strictEqual(getClass(undefined, {specific: true}), "Undefined", "should work");
    test.done();
  },
  "Number": function(test) {
    test.expect(5);
    test.strictEqual(getClass(123, {specific: true}), "Number", "should work");
    test.strictEqual(getClass(Number(123), {specific: true}), "Number", "should work");
    test.strictEqual(getClass(new MyNumber(123), {specific: true}), "Number", "should work");
    test.strictEqual(getClass(NaN, {specific: true}), "Number", "should work");
    test.strictEqual(getClass(Infinity, {specific: true}), "Number", "should work");
    test.done();
  },
  "String": function(test) {
    test.expect(3);
    test.strictEqual(getClass("foo", {specific: true}), "String", "should work");
    test.strictEqual(getClass(String("foo"), {specific: true}), "String", "should work");
    test.strictEqual(getClass(new MyString("foo"), {specific: true}), "String", "should work");
    test.done();
  },
  "Boolean": function(test) {
    test.expect(6);
    test.strictEqual(getClass(true, {specific: true}), "Boolean", "should work");
    test.strictEqual(getClass(Boolean(true), {specific: true}), "Boolean", "should work");
    test.strictEqual(getClass(new MyBoolean(true), {specific: true}), "Boolean", "should work");
    test.strictEqual(getClass(false, {specific: true}), "Boolean", "should work");
    test.strictEqual(getClass(Boolean(false), {specific: true}), "Boolean", "should work");
    test.strictEqual(getClass(new MyBoolean(false), {specific: true}), "Boolean", "should work");
    test.done();
  },
  "Function": function(test) {
    test.expect(3);
    function fn1() {}
    var fn2 = function() {};
    var fn3 = new Function("return 1;");
    test.strictEqual(getClass(fn1, {specific: true}), "Function", "should work");
    test.strictEqual(getClass(fn2, {specific: true}), "Function", "should work");
    test.strictEqual(getClass(fn3, {specific: true}), "Function", "should work");
    test.done();
  },
  "RegExp": function(test) {
    test.expect(2);
    var re1 = /foo/;
    var re2 = new RegExp("foo");
    test.strictEqual(getClass(re1, {specific: true}), "RegExp", "should work");
    test.strictEqual(getClass(re2, {specific: true}), "RegExp", "should work");
    test.done();
  },
  "Array": function(test) {
    test.expect(5);
    test.strictEqual(getClass([1, 2, 3], {specific: true}), "Array", "should work");
    test.strictEqual(getClass(_Array(10), {specific: true}), "Array", "should work");
    test.strictEqual(getClass(_Array(1, 2, 3), {specific: true}), "Array", "should work");
    test.strictEqual(getClass(new Array(10), {specific: true}), "Array", "should work");
    test.strictEqual(getClass(new Array(1, 2, 3), {specific: true}), "Array", "should work");
    test.done();
  },
  "Date": function(test) {
    test.expect(1);
    test.strictEqual(getClass(new Date(), {specific: true}), "Date", "should work");
    test.done();
  },
  "Error": function(test) {
    test.expect(6);
    test.strictEqual(getClass(new Error("foo"), {specific: true}), "Error", "should work");
    test.strictEqual(getClass(new EvalError("foo"), {specific: true}), "Error", "should work");
    test.strictEqual(getClass(new RangeError("foo"), {specific: true}), "Error", "should work");
    test.strictEqual(getClass(new ReferenceError("foo"), {specific: true}), "Error", "should work");
    test.strictEqual(getClass(new SyntaxError("foo"), {specific: true}), "Error", "should work");
    test.strictEqual(getClass(new TypeError("foo"), {specific: true}), "Error", "should work");
    test.done();
  },
  "global": function(test) {
    test.expect(1);
    test.strictEqual(getClass(_global, {specific: true}), "global", "should work");
    test.done();
  },
  "Object": function(test) {
    test.expect(2);
    function Foo() {}
    test.strictEqual(getClass(new Foo(), {specific: true}), "Object", "should work");
    test.strictEqual(getClass({}, {specific: true}), "Object", "should work");
    test.done();
  },
  "Specific": function(test) {
    test.expect(2);
    test.strictEqual(getClass(arguments, {specific: true}), "Arguments", "should work");
    test.strictEqual(getClass(JSON, {specific: true}), "JSON", "should work");
    test.done();
  }
};
