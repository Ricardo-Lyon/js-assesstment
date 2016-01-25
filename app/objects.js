exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    this.name = obj.name;
    this.greeting = obj.greeting;

    this.sayIt = fn;

    return this.sayIt.call(this);
  },

  alterObjects : function(constructor, greeting) {

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
