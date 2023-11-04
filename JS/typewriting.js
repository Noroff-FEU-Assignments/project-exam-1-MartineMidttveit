const typewriting = document.querySelector(".typewriting");

const text = "HI, MY NAME IS ESTELLE..."
let index = 0;

const typeFunction = (text) => {
    
    const typeWriter = setInterval(() => {
    typewriting.textContent += text[index];
    index += 1;

    if (index > text.length - 1) {
    clearInterval(typeWriter);

    setTimeout(() => {
        typewriting.textContent = "" 
        index = 0
        typeFunction(text)
    }, 4000)
}}, 150);
}

typeFunction(text);