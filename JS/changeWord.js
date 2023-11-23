export default function changeWord() {

    const welcome = document.querySelector(".welcome");
    const language = document.querySelector(".language")
    
    const land = [
        "Welcome in English", 
        "Welcome in Spanish", 
        "Welcome in Swahili", 
        "Welcome in German", 
        "Welcome in Portugese", 
        "Welcome in Vietnamese", 
        "Welcome in Albanian", 
        "Welcome in Polish", 
        "Welcome in Norwegian", 
        "Welcome in Italian", 
        "Welcome in Serbian",
        "Welcome in Korean",
        "Welcome in Japanese"
    ];

    const word = [
        "WELCOME", 
        "BIENVENIDO", 
        "KARIBU", 
        "WILLKOMMEN", 
        "BEM-VINDO", 
        "Huānyíng", 
        "MIRË SE VINI", 
        "POWITANIE", 
        "VELKOMMEN", 
        "BENVENUTO", 
        "Dobrodošli",
        "hwan-yeong",
        "Irasshaimase"
    ];

    let index = 0;

    function changeWord(index) {
        welcome.textContent = word[index]
        language.textContent = land[index]
    }

    setInterval(() => {
        index++;

        if(index > 12) {
            index = 0;
        }
        changeWord(index);
    }, 1700)
}
