# [3.0.4] Javascript On Demand with HeadJS
 
>Checkout **index.html** with this example bellow.
 
1. We depend of HeadJS library to to do our magic, so add it and out function just into *head* of your html.
```html
	<script src="assets/vendor/headjs/dist/1.0.0/head.load.min.js"></script>
	<script src="lib/app.js"></script>
```
 
2. After it, you nee to create an *instance* of the *App* function.
>The App function can receive the following params during its instantiation:
```javascript
var app = {
  protocol : "",
  host : "localhost",
  // You can define default instances or vendors to load in every page filling this next parameters
  instances : [],
  vendors : []
};
 
3. In each page of your site, you can define those scripts to load or call by instances, like this:

>Instance will run after each vendor defined on current page.
```javascript
app.setInstances([
   "myMenuPlugin();",
   "AnotherFormValidation();"
]);
 
app.setVendors([
   'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'
]);
```

**each vendor entry URL, if it isn't a valid URL, is adjusted to a complete URL, so 'assets/js/main.js' will be transformed to 'http://localhost/assets/js/main.js'**
 
4. At least, if you have a footer that repeats in everything, put it there just before the **<\/body>**.
>This code will load every instance and vendor that you had set.

```javascript
if (typeof head === 'function' && typeof App === 'function' && typeof app !== 'undefined') {
    head.load(app.getVendors(), function() {
    eval(app.getInstances());
  });
}
```
