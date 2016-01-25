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
  	if (arr.length == 0) return [[]];

  	var result = [];

  	arr.forEach((val, i) => {
  		var copy = Object.create(arr);

  		var head = copy.splice(i, 1);

  		var rest = this.permute(copy);

      rest.forEach((rv, ri) => {
        var next = head.concat(rest[ri]);
        result.push(next);
      });
    })

  	return result;
  },

  fibonacci: function(n) {
    if(n<=1) {
      return n;
    } else {
      return this.fibonacci(n-1) + this.fibonacci(n-2);
    }
  },

  validParentheses: function(n) {

  }
};
