const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email-address");
const subjectInput = document.querySelector(".subject");
const textarea = document.querySelector(".textarea");

const contactForm = document.querySelector(".contact-info");
const contactError = document.querySelector(".contact-error");

const characterCount = document.querySelector(".characters-2");
const characterCountTwo = document.querySelector(".characters-1");
const message = document.querySelector(".message");
const sendBtn = document.querySelector("#send");
const errorText = document.querySelector(".error-text");

let validName = false;
let validEmail = false;
let validSubject = false;
let validTextarea = false;

// NAME

nameInput.addEventListener('blur', (e) => {
if (e.target.value.length === 0) return;
  
if(e.target.value.length >= 5) {
  validName = true;
  e.target.parentElement.querySelector(".contact-error").style.display = "none";
  e.target.style.border = "none";
}

else {
  validName = false;
  e.target.parentElement.querySelector(".contact-error").style.display = "flex";
  e.target.style.border = "1px solid red"
}
})

nameInput.addEventListener("input", (e) => {
  if(e.target.value.length <= 0) {
    e.target.parentElement.querySelector(".contact-error").style.display = "flex";
    setTimeout(() => {
      e.target.parentElement.querySelector(".contact-error").style.display = "none";
      e.target.style.border = "none";
    }, 1000)
  } if(e.target.value.length >= 5) {
    e.target.parentElement.querySelector(".contact-error").style.display = "none";
    e.target.style.border = "none";
  }
})

// EMAIL

emailInput.addEventListener('blur', (e) => {
  if (e.target.value.length === 0) return;
    
  if(e.target.value.includes(".") &&
  e.target.value.includes("@") &&
  e.target.value.length > 6) {
  e.target.parentElement.querySelector(".contact-error").style.display = "none";
  e.target.style.border = "none";
  validEmail = true;
  }
  
  else {
    validEmail = false;
    e.target.parentElement.querySelector(".contact-error").style.display = "flex";
    e.target.style.border = "1px solid red"
  }
  })
  
  emailInput.addEventListener("input", (e) => {
    if(e.target.value.length <= 0) {
      e.target.parentElement.querySelector(".contact-error").style.display = "flex";
      setTimeout(() => {
        e.target.parentElement.querySelector(".contact-error").style.display = "none";
        e.target.style.border = "none";
      }, 1000)
    } if(e.target.value.includes(".") &&
      e.target.value.includes("@") &&
      e.target.value.length > 6) {
      e.target.parentElement.querySelector(".contact-error").style.display = "none";
      e.target.style.border = "none";
    }
  })

// SUBJECT

  subjectInput.addEventListener('blur', (e) => {
    if (e.target.value.length === 0) return;
      
    if(e.target.value.length >= 15) {
      e.target.parentElement.querySelector(".contact-error").style.display = "none";
      e.target.style.border = "none";
      validSubject = true;
    }
    
    else {
      validSubject = false;
      e.target.parentElement.querySelector(".contact-error").style.display = "flex";
      e.target.style.border = "1px solid red"
    }
    })
    
    subjectInput.addEventListener("input", (e) => {
      if(e.target.value.length <= 0) {
        e.target.parentElement.querySelector(".contact-error").style.display = "flex";
        setTimeout(() => {
          e.target.parentElement.querySelector(".contact-error").style.display = "none";
          e.target.style.border = "none";
        }, 1000)
      } if(e.target.value.length >= 15) {
        e.target.parentElement.querySelector(".contact-error").style.display = "none";
        e.target.style.border = "none";
      }
    })

// MESSAGE

textarea.addEventListener("input", (e) => {
    const text = e.target.value;
    const characterCountValue = text.replace(/\s/g, "").length;
    characterCount.textContent = characterCountValue;

    if (characterCountValue < 25) {
        characterCount.style.color = "red";
    } else {
        characterCount.style.color = "green";
    }

    if (characterCountValue > 499) {
        e.target.value = text.substring(0, 499);
        characterCount.style.color = "red";
        characterCountTwo.style.color = "red";
    } else {
        characterCountTwo.style.color = "black";
    }
    });

    textarea.addEventListener('blur', (e) => {
    if (e.target.value.length === 0) return;
        
    if(e.target.value.length >= 25) {
        validTextarea = true;
        e.target.parentElement.querySelector(".contact-error").style.display = "none";
        e.target.style.border = "none";
    }
    
    else {
        validTextarea = false;
        e.target.parentElement.querySelector(".contact-error").style.display = "flex";
    }
    })
    
    textarea.addEventListener("input", (e) => {
        if(e.target.value.length <= 0) {
            e.target.parentElement.querySelector(".contact-error").style.display = "flex";
            setTimeout(() => {
            e.target.parentElement.querySelector(".contact-error").style.display = "none";
        }, 1000)
        }
        if(e.target.value.length >= 25) {
            e.target.parentElement.querySelector(".contact-error").style.display = "none";
        }
    })

// SEND-BTN

  sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
    if(validName && validEmail && validSubject && validTextarea) {
      sendBtn.textContent = "SENT";
      nameInput.value = "";
      emailInput.value = "";
      subjectInput.value = "";
      textarea.value = "";
    } else {
      if(!validName) {
        nameInput.parentElement.querySelector(".contact-error").style.display = "flex";
        nameInput.style.border = "1px solid red"
      }
      if(!validEmail) {
        emailInput.parentElement.querySelector(".contact-error").style.display = "flex";
        emailInput.style.border = "1px solid red"
      }
      if(!validSubject) {
        subjectInput.parentElement.querySelector(".contact-error").style.display = "flex";
        subjectInput.style.border = "1px solid red"
      }
      if(!validTextarea) {
        textarea.parentElement.querySelector(".contact-error").style.display = "flex";
        textarea.style.border = "1px solid red"
      }
    }
  })