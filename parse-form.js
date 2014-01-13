/*global ParseForm:true */

ParseForm = function(elem) {
  var self = this;

  if (!elem) return console.error('You must provide an element or selector');
  
  // save dom node if it's not a jquery selector
  if (typeof this.el !== 'string') {
    this.el = elem;
  }

  // cache form jQuery object
  this.$el = $(elem);

};

