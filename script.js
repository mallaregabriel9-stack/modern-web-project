function showMessage() {
    alert("Thank you for visiting our website!");
}

window.onload = function () {

    const greeting = document.getElementById("greeting");

    if(greeting){

        const hour = new Date().getHours();

        if(hour < 12){
            greeting.innerHTML = "Good Morning!";
        }
        else if(hour < 18){
            greeting.innerHTML = "Good Afternoon!";
        }
        else{
            greeting.innerHTML = "Good Evening!";
        }
    }
}

function validateForm(){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){
        alert("Please fill out all fields.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}