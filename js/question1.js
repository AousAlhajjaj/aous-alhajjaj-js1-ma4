const form = document.querySelector("#contactForm");
const lastName = document.querySelector("#lastName");
const error = document.querySelector("#lastNameError");

function validation() {
    event.preventDefault();

    if(lastName.value.trim().length > 4) {
        error.style.display = "none";
    } 
    
    else {
        error.style.display = "block";
    }
}

form.addEventListener("submit", validation);