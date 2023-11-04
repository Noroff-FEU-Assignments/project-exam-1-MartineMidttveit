const imageContainer = document.querySelector(".all-images");
const images = document.querySelectorAll(".hero-image");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

images.forEach((img, i) => {
  img.value = i + 1;
});

const nextImage = function () {
  images.forEach((img) => {
    img.classList.remove(`img-${img.value}`);

    if (img.value === 1) {
      img.value = 7;
    } else img.value--;

    img.classList.add(`img-${img.value}`);
  });
};

const prevImage = function () {
  images.forEach((img) => {
    img.classList.remove(`img-${img.value}`);

    if (img.value === images.length) {
      img.value = 1;
    } else {
      img.style.display = "inline";
      img.value++;
    }

    img.classList.add(`img-${img.value}`);
  });
};
arrowRight.addEventListener("click", nextImage);
arrowLeft.addEventListener("click", prevImage);
