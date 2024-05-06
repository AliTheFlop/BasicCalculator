var input = document.getElementById('myInput');

input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("enterBtn").click();
    }

})

function appendToDisplay(num){
    input.value += num;
}

function clearDisplay(){
    input.value = '';
}

function calculate(){
    try {
        input.value = eval(input.value);
    } catch (error) {
        console.log("An error occurred");
        console.log(error);
        input.value = "Error";
    }
}


