exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var loop = setInterval(function () {
      alert('aaaa');
    }, 10);
  }
};
