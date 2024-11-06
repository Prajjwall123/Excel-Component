"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("bootstrap/dist/css/bootstrap.css");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Table(props) {
  var _useState = (0, _react.useState)(props.jsonData),
    _useState2 = _slicedToArray(_useState, 1),
    formData = _useState2[0];
  var _useState3 = (0, _react.useState)(props.isDarkMode),
    _useState4 = _slicedToArray(_useState3, 1),
    isDarkMode = _useState4[0];
  // const [setIsDarkMode] = useState(false);

  // const toggleTheme = (value) => {
  //   const newTheme = !value;
  //   setIsDarkMode(newTheme);
  //   document.body.classList.toggle("dark-theme", newTheme);
  //   localStorage.setItem("darkTheme", newTheme);
  // };

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("darkTheme") === "true";
  //   setIsDarkMode(savedTheme);
  //   document.body.classList.toggle("dark-theme", savedTheme);
  // }, []);

  //   const [inputField, setInputField] = useState({});
  //   const [total, setTotal] = useState({});

  var handleInputChange = function handleInputChange(code, colIndex, value) {
    props === null || props === void 0 || props.setInputField(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, code, _objectSpread(_objectSpread({}, prevState[code]), {}, _defineProperty({}, colIndex, value))));
    });
  };
  var calculateFormula = function calculateFormula(formula, colIndex) {
    // Extract field codes (Cabh, MS) from formula using regex
    var variables = formula.match(/\b\w+\b/g);

    // Replace field codes in the formula with their actual values
    var calculatedFormula = formula;
    variables.forEach(function (variable) {
      var value = props.inputField[variable] ? props.inputField[variable][colIndex] : 0;
      calculatedFormula = calculatedFormula.replace(variable, value || 0);
    });
    // Use eval to evaluate the final mathematical expression
    try {
      return eval(calculatedFormula).toFixed(2); // Evaluates the expression (e.g., "20 + 10" becomes 30)
    } catch (error) {
      console.error("Error calculating formula:", error);
      return "";
    }
  };
  var handleColChange = function handleColChange(e) {
    props.colNum(e); // Update number of columns
  };
  var verticalCalculation = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(formula, colIndex, newtotal) {
      var variables, calculatedFormula;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // const variables = formula.match(/\b\w+\b/g)
            variables = formula.match(/[A-Z]\w+[A-Z]/g); // Replace field codes in the formula with their actual values
            calculatedFormula = formula;
            variables.forEach(function (variable) {
              var value = newtotal[variable] ? newtotal[variable][colIndex] : 0;
              calculatedFormula = calculatedFormula.replace(variable, value || 0);
            });
            // Use eval to evaluate the final mathematical expression
            _context.prev = 3;
            return _context.abrupt("return", eval(calculatedFormula).toFixed(2));
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](3);
            console.error("Error calculating formula:", _context.t0);
            return _context.abrupt("return", "");
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 7]]);
    }));
    return function verticalCalculation(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  var horizontalCalculation = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(formula, colIndex, newtotal) {
      var variables, getValue, calculatedFormula;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            variables = formula.match(/\b\w+\b/g); // Function to get the correct value based on index
            getValue = function getValue(variable, index) {
              var _newtotal$variable;
              return ((_newtotal$variable = newtotal[variable]) === null || _newtotal$variable === void 0 ? void 0 : _newtotal$variable[index]) || 0;
            }; // Replace field codes in the formula with their actual values
            calculatedFormula = formula;
            variables.forEach(function (variable) {
              var currentIndex = colIndex;
              var previousIndex = Math.max(-1, colIndex - 1);

              // Replace [1] with current index value
              var currentValue = getValue(variable, currentIndex);
              calculatedFormula = calculatedFormula.replace(new RegExp("".concat(variable, "\\[1\\]"), "g"), currentValue.toString());
              var previousValue = getValue(variable, previousIndex);
              calculatedFormula = calculatedFormula.replace(new RegExp("".concat(variable, "\\[0\\]"), "g"), previousValue.toString());
            });
            _context2.prev = 4;
            return _context2.abrupt("return", eval(calculatedFormula).toFixed(2));
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](4);
            console.error("Error calculating formula:", _context2.t0);
            return _context2.abrupt("return", "");
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[4, 8]]);
    }));
    return function horizontalCalculation(_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
  var calculateButton = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var promises, flattenedArray, verticalArray, newvertotal, horizontalArray, newhortotal;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            promises = formData.map(function (element) {
              return element.AccountHeadings.filter(function (x) {
                return x.Type === "TotalWithFormula";
              });
            });
            _context7.next = 3;
            return Promise.all(promises).then(function (results) {
              return results.flat();
            });
          case 3:
            flattenedArray = _context7.sent;
            // console.log(flattenedArray)
            verticalArray = flattenedArray.filter(function (x) {
              return x.Calculation === "Vertical";
            });
            if (!verticalArray) {
              _context7.next = 12;
              break;
            }
            newvertotal = {};
            _context7.next = 9;
            return Promise.all(verticalArray.map(/*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(x) {
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", new Promise(function (resolve) {
                        x === null || x === void 0 || x.Elements.forEach(function (y) {
                          // console.log(y)
                          for (var i = 0; i < props.colNum; i++) {
                            var _document$getElementB;
                            var value = ((_document$getElementB = document.getElementById(y + "-" + i)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.value) || "";
                            newvertotal = _objectSpread(_objectSpread({}, newvertotal), {}, _defineProperty({}, y, _objectSpread(_objectSpread({}, newvertotal[y]), {}, _defineProperty({}, i, value))));
                          }
                        });
                        resolve();
                      }));
                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }));
              return function (_x7) {
                return _ref4.apply(this, arguments);
              };
            }()));
          case 9:
            // console.log(newvertotal)
            props.setTotal(newvertotal);
            _context7.next = 12;
            return Promise.all(verticalArray.map(/*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(x) {
                var result, i, a;
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      result = {};
                      i = 0;
                    case 2:
                      if (!(i < props.colNum)) {
                        _context4.next = 10;
                        break;
                      }
                      _context4.next = 5;
                      return verticalCalculation(x.Formula, i, newvertotal);
                    case 5:
                      a = _context4.sent;
                      result[i] = a;
                    case 7:
                      i++;
                      _context4.next = 2;
                      break;
                    case 10:
                      // console.log(result)

                      props.setTotal(function (prevState) {
                        return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, x.Code, _objectSpread(_objectSpread({}, prevState[x.Code]), result)));
                      });
                    case 11:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              }));
              return function (_x8) {
                return _ref5.apply(this, arguments);
              };
            }()));
          case 12:
            horizontalArray = flattenedArray.filter(function (x) {
              return x.Calculation === "Horizontal";
            });
            if (!horizontalArray) {
              _context7.next = 19;
              break;
            }
            newhortotal = {};
            _context7.next = 17;
            return Promise.all(horizontalArray.map(/*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(x) {
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", new Promise(function (resolve) {
                        x === null || x === void 0 || x.Elements.forEach(function (y) {
                          // console.log(y)
                          for (var i = 0; i < props.colNum; i++) {
                            var _document$getElementB2;
                            var value = ((_document$getElementB2 = document.getElementById(y + "-" + i)) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.value) || "";
                            newhortotal = _objectSpread(_objectSpread({}, newhortotal), {}, _defineProperty({}, y, _objectSpread(_objectSpread({}, newhortotal[y]), {}, _defineProperty({}, i, value))));
                          }
                        });
                        resolve();
                      }));
                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5);
              }));
              return function (_x9) {
                return _ref6.apply(this, arguments);
              };
            }()));
          case 17:
            _context7.next = 19;
            return Promise.all(horizontalArray.map(/*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(x) {
                var result, i, a;
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      result = {};
                      i = 0;
                    case 2:
                      if (!(i < props.colNum)) {
                        _context6.next = 10;
                        break;
                      }
                      _context6.next = 5;
                      return horizontalCalculation(x.Formula, i, newhortotal);
                    case 5:
                      a = _context6.sent;
                      result[i] = a;
                    case 7:
                      i++;
                      _context6.next = 2;
                      break;
                    case 10:
                      // console.log(result)

                      props.setTotal(function (prevState) {
                        return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, x.Code, _objectSpread(_objectSpread({}, prevState[x.Code]), result)));
                      });
                    case 11:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6);
              }));
              return function (_x10) {
                return _ref7.apply(this, arguments);
              };
            }()));
          case 19:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function calculateButton() {
      return _ref3.apply(this, arguments);
    };
  }();
  var tripleCalculateButton = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var i;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            i = 0;
          case 2:
            if (!(i <= formData.length + 1)) {
              _context8.next = 8;
              break;
            }
            _context8.next = 5;
            return calculateButton();
          case 5:
            i++;
            _context8.next = 2;
            break;
          case 8:
            _context8.next = 13;
            break;
          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](0);
            console.error("Error during triple calculation:", _context8.t0);
          case 13:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 10]]);
    }));
    return function tripleCalculateButton() {
      return _ref8.apply(this, arguments);
    };
  }();
  var borderRadiusStyle = {
    borderRadius: 2
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-3 border ".concat(isDarkMode ? "border-light bg-secondary text-light" : "border-dark bg-light text-dark")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex flex-row-reverse mb-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "App d-flex flex-row"
  })), formData.map(function (heading, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "card mb-2 ".concat(isDarkMode ? "bg-dark text-light" : "bg-white text-dark"),
      key: index
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "card-header ".concat(isDarkMode ? "bg-success text-white" : "bg-primary text-white", " fs-3")
    }, /*#__PURE__*/_react["default"].createElement("strong", null, heading.DocumentName)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "d-flex align-items-center col-sm-12 mb-3 fs-4"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-sm-3 me-2"
    }, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement("strong", null, "No. of Fiscal Years"))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-sm-3 me-2"
    })), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "overflow-auto"
    }, heading.AccountHeadings.map(function (x, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: index,
        className: "d-flex align-items-center ".concat(x.IsStrong ? isDarkMode ? "bg-light text-dark p-1 rounded-2 mb-1 mt-1" : "bg-dark text-white p-1 rounded-2 mb-1 mt-1" : "")
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-sm-4"
      }, x.IsStrong ? /*#__PURE__*/_react["default"].createElement("strong", {
        className: "".concat(isDarkMode ? "text-dark" : "text-white")
      }, x.Title) : /*#__PURE__*/_react["default"].createElement("span", null, x.Title)), Array.from({
        length: props.colNum
      }, function (_, colIndex) {
        var _props$total;
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: colIndex,
          className: "col-sm-2 "
        }, x.Type === "Input" ? /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          className: "form-control",
          placeholder: x.Placeholder,
          id: "".concat(x.Code, "-").concat(colIndex) // Unique ID per column
          ,
          value: props.inputField[x.Code] && props.inputField[x.Code][colIndex] || ""
          // readOnly={(index !== 0 && colIndex === 0)}
          ,
          onChange: function onChange(e) {
            return handleInputChange(x.Code, colIndex, e.target.value);
          } // Update state with column index
        }) : x.Type === "Formula" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          className: "form-control ",
          style: {
            backgroundColor: '#e9ecef',
            cursor: 'not-allowed'
          },
          value: calculateFormula(x.Formula, colIndex),
          id: "".concat(x.Code, "-").concat(colIndex),
          readOnly: true
        })) : x.Type === "TotalWithFormula" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          className: "form-control",
          style: {
            backgroundColor: '#e9ecef',
            cursor: 'not-allowed'
          },
          value: (_props$total = props.total) === null || _props$total === void 0 || (_props$total = _props$total[x.Code]) === null || _props$total === void 0 ? void 0 : _props$total[colIndex] // || inputField?.[x.Code]?.[colIndex]
          ,
          id: "".concat(x.Code, "-").concat(colIndex),
          readOnly: x.Code !== "CUNEPRTRTOBSREEA"
        })) : x.Type === "Dropdown" ? /*#__PURE__*/_react["default"].createElement("select", {
          className: "form-control",
          id: "".concat(x.Code, "-").concat(colIndex),
          onChange: function onChange(e) {
            return handleInputChange(x.Code, colIndex, e.target.value);
          },
          value: props.inputField[x.Code] && props.inputField[x.Code][colIndex] || ""
        }) : "");
      }));
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "text-center p-4 "
    }, /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      className: "btn btn-block ".concat(isDarkMode ? "btn-primary" : "btn-success"),
      onClick: function onClick() {
        return tripleCalculateButton();
      }
    }, "Calculate"))));
  })));
}
var _default = exports["default"] = Table;