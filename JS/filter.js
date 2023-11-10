const filterBtn = document.querySelector("#filterBtn");
const closeBtn = document.querySelector(".close");
const filter = document.querySelector(".filter-open");

filterBtn.addEventListener('click', () => {
    filter.classList.add("open");
    filter.style.display = "flex";
    filter.style.left = "0";
});

closeBtn.addEventListener('click', () => {
    filter.classList.remove("open");
    filter.style.display = "none";
});