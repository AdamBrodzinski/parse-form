/*global ParseForm:true */

ParseForm = function (elem) {
  var self = this;

  if (!elem) return console.error('You must provide an element or selector');

  this.$el = $(elem);

  this.el = this.$el[0];

  // save each input into array, e.g. [{name: 'email', value:'jdoe@gmail.com'}]
  this.inputs = this.$el.serializeArray();

  // itterate through all inputs and set their 'name' attr to the key & set the
  // input value to the key's value. let's you call form.email to grab value.
  for (var i = 0; i < this.inputs.length; i++) {
    var input = this.inputs[i],
      name = input.name,
      $el = self.$el.find('[name="' + name + '"]');

    // save input value, e.g. form.email >>> 'jdoe@gmail.com'
    this[name] = $el.val();
    // save jquery selector, e.g. form.$email
    this['$' + name] = $el;
  }

};

// reset/empty the form
ParseForm.prototype.reset = function () {
  this.el.reset();
};