exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce((a,b) => a + b)
  },

  remove : function(arr, item) {
    return arr.filter( (x) => x !== item )
  },

  removeWithoutCopy : function(arr, item) {
    for(var x = arr.length; x--;) {
      if(arr[x] === item) {
        arr.splice(x, 1);
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var c = 0;
    for(var x = arr.length; x--;) {
      if(arr[x] == item) c++;
    }
    return c;
  },

  duplicates : function(arr) {
    
  },

  square : function(arr) {
    arr.filter((v, i, a) => a[i] = v * v);
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var resp = [];
    for(var x = arr.length; x--;) {
      if(arr[x] === target) {
        resp.push(x);
      }
    }
    return resp;
  }
};
