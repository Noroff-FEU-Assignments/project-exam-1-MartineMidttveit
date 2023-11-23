const emailAddress = document.querySelector(".email-address")
const emailError = document.querySelector(".email-error");
const signUpBtn = document.querySelector(".signUpBtn");
const headline = document.querySelector(".eBookHeadline");
const eBookText = document.querySelector(".eBookText");

signUpBtn.addEventListener('click', () => {
    if(emailAddress.value.includes ("@") && emailAddress.value.includes (".")) {
        emailError.style.display = "none";
        emailAddress.style.border = "none";
        signUpBtn.textContent = "WELCOME";
        headline.textContent = "THANK YOU FOR SUBSCRIBING"
        eBookText.textContent = "... and welcome to the globetrotter club! Your e-book will be sent to the provided e-mail. Feel free to reach out with feedback and comments."
    } else {
        emailError.style.display = "block";
        emailError.textContent = "MUST BE A VALID E-MAIL";
        emailAddress.style.border = "1px solid red";
    }
})