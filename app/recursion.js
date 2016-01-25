exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var files = [];

    function finder(data, dirName, files) {
      data.files.forEach( (item) => {
        if (typeof item == 'string') {
          if((typeof dirName === 'undefined' || data.dir === dirName)) {
            files.push(item);
          }
        } else {
          finder(item, dirName, files);
        }
      });
    }

    finder(data, dirName, files);

    return files;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
