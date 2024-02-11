// Get the button element
var button = document.getElementById("colorButton");

// Add a click event listener to the button
button.addEventListener("click", function() {
    // Generate a random color
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    
    // Change the button's background color to the random color
    button.style.backgroundColor = randomColor;
});
