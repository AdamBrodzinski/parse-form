# Parse-Form

Parse form is a simple package used to parse a form's input fields. It also provide some common helpers to validate, manipulate, and throw errors.


## Useage:

</br>

### Install
If you're using meteor run `mrt add meteor-parse-form` to install the package.  
Othewise, add the `parse_form.js` file to an HTML script tag `<script src='js/parse_form.js'>`.  
*jQuery is a requirement and must be initialized before parsing a form.*





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
console.log(form.name, form.email, form.password);
```
<br/>

### Validate

If you would like to do simple validation, pass in an object with the input name as the key and a regex as the value. There are also a few shortcuts, `'email'`, `'notBlank'` and `'minLength6'`.

```javascript
var form = new ParseForm(e.target, {
  validate: {
    email: 'email',
    username: /^[A-Z]{3,}$/i,
    password: 'minLength6'
  }
});


if (!form.validate.username) {
  alert('not valid');
}
```
<br/>

### Manipulate

If you would like to further manipulate the form and it's input elements, jQuery wrapped elements are attached to the form object with a `$` prefix. e.g., `$name`

```js
var form = new ParseForm('#new-user-form');

form.$username.val('foo');
form.$el.find('.thing')
```
