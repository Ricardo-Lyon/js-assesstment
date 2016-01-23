exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var regex = new RegExp('\\d+');
    return regex.test(str);
  },

  containsRepeatingLetter : function(str) {
    var regex = new RegExp('((\\D)\\2+)');
    return regex.test(str);
  },

  endsWithVowel : function(str) {
    var regex = new RegExp('[aeiou]$', 'i');
    return regex.test(str);
  },

  captureThreeNumbers : function(str) {
    var regex = new RegExp('\\d{3}');
    var match = regex.exec(str);
    return (match) ? match[0] : false;
  },

  matchesPattern : function(str) {
    var regex = new RegExp('\\b(\\d{3}-\\d{3}-\\d{4})\\b');
    resp = (str.match(regex)) ? true : false;
    return resp;
  },
  isUSD : function(str) {
    var regex = new RegExp('^\\$\\d{1,3}(,\\d{3})*(\\.\\d\\d)?$');
    return regex.test(str);
  }
};
