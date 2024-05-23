document.addEventListener("DOMContentLoaded", function () {
  const newList = document.getElementById("create-new-list");
  const newListModal = document.getElementById("new-list-modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const closeButton = document.getElementById("close-button");

  newList.addEventListener("click", function () {
    newListModal.classList.toggle("hidden");
    modalOverlay.classList.toggle("hidden");
  });

  closeButton.addEventListener("click", function () {
    newListModal.classList.add("hidden");
    modalOverlay.classList.toggle("hidden");
  });
});