const textarea = document.querySelector(".textarea");
const characterCount = document.querySelector(".characters-2");
const characterCountTwo = document.querySelector(".characters-1");

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

const nameInput = document.querySelector(".name");

nameInput.addEventListener("input", () => {
    const inputValue = nameInput.value;
    if (inputValue.length >= 5) {
        nameInput.classList.remove("invalid");
    } else {
        nameInput.classList.add("invalid");
    }
});