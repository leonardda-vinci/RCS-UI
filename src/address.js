document.addEventListener("DOMContentLoaded", function () {
  const addAddress = document.getElementById("add-new-address");
  const addAddressModal = document.getElementById("new-address-modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const closeButton = document.getElementById("close-button");

  addAddress.addEventListener("click", function () {
    addAddressModal.classList.toggle("hidden");
    modalOverlay.classList.toggle("hidden");
  });

  closeButton.addEventListener("click", function () {
    addAddressModal.classList.add("hidden");
    modalOverlay.classList.toggle("hidden");
  });
});