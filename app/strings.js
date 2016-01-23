exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var arr = str.split('');
    var count = {};

    // var unique = arr.filter((e, i, arr) => {
    //     if(typeof(count[e]) === 'undefined' || count[e] < amount) {
    //       count[e] = (count[e] || 0) +1 ;
    //       return true;
    //     }
    // });

// console.log(arr.join(''));
    var filtered = arr.filter((e, i, arr) => {

    });

    return filtered.join('');

  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
    if(str === "") {
      return ""
    } else {
      return this.reverseString(str.substr(1)) + str.charAt(0)
    }
  }
};
