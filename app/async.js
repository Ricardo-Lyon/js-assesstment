exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return {
      then: (callback) => {
        return callback(value)
      }
    }
  },

  manipulateRemoteData : function(url) {
    return {
      then: (callback) => {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', url);

        xhr.onload = function() {
            var tmp = JSON.parse(xhr.response);
            var arr = [];
            for(var val of tmp.people){
              arr.push(val.name);
            }
            return callback(arr.sort());
        }

        xhr.send();
      }
    }
  }
};
