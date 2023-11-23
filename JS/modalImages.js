const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');

export default function modalImages() {
function openModal(imageSrc) {
  modalImage.src = imageSrc; 
  modal.showModal(); 
}

function closeModal() {
  modal.close();
}

document.querySelectorAll(".modal-image").forEach(function(element) {
  element.addEventListener('click', function() {
    openModal(this.src); 
    modal.style.display = "flex";
  });
});

modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal(); 
    modal.style.display = "none";
  }
});

document.querySelector('#modal .close').addEventListener('click', function() {
  closeModal(); 
  modal.style.display = "none";
})}