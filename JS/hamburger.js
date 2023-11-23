const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const headerNav = document.querySelector(".header-nav");

openBtn.addEventListener('click', () => {
    headerNav.style.display = "flex";
    openBtn.classList.add("hidden-element");
    closeBtn.classList.remove("hidden-element");
})

closeBtn.addEventListener('click', () => {
    headerNav.style.display = "none";
    openBtn.classList.remove("hidden-element");
    closeBtn.classList.add("hidden-element");
})