exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    if(!this.files) this.files = [];

    data.files.forEach( (item) => {
      if (typeof item == 'string') {
        if((typeof dirName === 'undefined' || data.dir === dirName)) {
          this.files.push(item);
        }
      } else {
        this.listFiles(item, dirName);
      }
    });

    return this.files;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
