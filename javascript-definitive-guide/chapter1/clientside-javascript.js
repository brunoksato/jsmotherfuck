function moveon() {
// Display a modal dialog to ask the user a question
var answer = confirm("Ready to move on?");
// If they clicked the "OK" button, make the browser load a new page
if (answer) window.location = "http://google.com";
}
// Run the function defined above 1 minute (60,000 milliseconds) from now.
setTimeout(moveon, 60000);
