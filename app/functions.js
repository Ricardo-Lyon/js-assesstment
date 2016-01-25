exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    var func = (param) => str + ', ' + param;

    return func;
  },

  makeClosures : function(arr, fn) {
    for(var i = arr.length; i--;) {
      arr[i] = fn;
    }
    return arr;
  },

  partial : function(fn, str1, str2) {
    var func = (param) => fn(str1, str2, param);

    return func;
  },

  useArguments : function() {
    var sum = 0;
    for (var i = arguments.length; i--; ) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);

    return fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
