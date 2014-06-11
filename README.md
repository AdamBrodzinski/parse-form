# Parse-Form

Parse form is a micro library used to parse a form's input fields and return it's values. It also provide some helper methods to grab the raw nodes and jQuery wrapped nodes.



### Install

`mrt add meteor-parse-form` to install the Meteor package.  
Or add the `parse_form.js` file and include a script tag `<script src='js/parse_form.js'>`.  


## Useage: </br>

Assuming that this piece of HTML is in the DOM, let's get started.

```html
<form id='new-user-form'>
    <input type="text"     name="email">
    <input type="text"     name="username">
    <input type="password" name="password">
    <input type="submit" formnovalidate value="Create User">
</form>
```
<br/>



### Parse

We call `new ParseForm` and pass in the form element. Alternatively you can also pass in a jQuery selector like `#new-user-form`. To access the input values, use the input name as a key. e.g. `form.name == 'John Doe'`


```javascript
var form = new ParseForm(e.target);

// form.name     ==  'John Doe'
// form.email    ==  'john@gmail.com'
// form.password == 'password1'
```
<br/>



### Manipulate

If you would like to further manipulate the form and it's input elements, jQuery wrapped elements are attached to the form object with a `$` prefix. e.g., `$name`

```js
var form = new ParseForm('#new-user-form');

form.$username.val('foo');
//  `form.$el` - grab the form wrapped in jQuery
form.$el.find('.thing');
```
