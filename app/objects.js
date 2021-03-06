exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
      return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
      return constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var result = [];
    var props = Object.getOwnPropertyNames(obj);

    props.forEach((property) => {
      result.push(property + ': ' + obj[property]);
    });

    return result;
  }
};
