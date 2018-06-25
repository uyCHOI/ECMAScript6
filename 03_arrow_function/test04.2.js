// Bad
var button = document.getElementById('myButton');

// button.addEventListener('click', () => {
//   console.log(this === window); // => true
//   this.innerHTML = 'Clicked button';
// });

button.addEventListener('click', function() {
    console.log(this === button); // => true
    this.innerHTML = 'Clicked button';
});