# Parse-Form

Parse form is a micro library used to parse a form's input fields and return it's values. It also provide some helper methods to grab the raw nodes and jQuery wrapped nodes.



### Install

In Meteor apps use `meteor add skinnygeek1010:parse-form` to install the Meteor package.  
Otherwise, add the `parse-form-min.js` file to your project with a script tag.  
<br/>



### Useage

Assuming that this piece of HTML is in the DOM, let's get started.

```html
<form id='new-user-form'>
    <input type="text"     name="email">
    <input type="text"     name="username">
    <input type="password" name="password">
    
    <input type="submit" value="Create User">
</form>
```
<br/>



We call `new ParseForm` and pass in the form element. Alternatively you can also pass in a jQuery selector like `#new-user-form`. To access the input values, use the input name as a key. e.g. `form.name == 'John Doe'`


```javascript
//  form = new ParseForm(e.target);
var form = new ParseForm('#new-user-form');

form.name      ==  'John Doe'
form.email     ==  'john@gmail.com'
form.password  ==  'password1'
```
<br/>



### Manipulate

If you would like to further manipulate the form and it's input elements, jQuery wrapped elements are attached to the form object with a `$` prefix. e.g., `$name`

```js
var form = new ParseForm('#new-user-form');

// access the jQuery wrapped input
form.$username.val('foo');

// `form.$el` - grab the form wrapped in jQuery
form.$el.find('.thing');

// grab the form's raw DOM node
form.el

// clears contents of form
form.reset();
```
