// Get the current date and time
var currentDate = new Date();
var currentHour = currentDate.getHours();

// Define greeting messages based on the time of day
var greeting;
if (currentHour < 12) {
    greeting = "Good morning!";
} else if (currentHour < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}

// Display the greeting message in an alert box
alert(greeting);
