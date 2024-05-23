function hideShow() {
  var x = document.getElementById("filters");
  var downArrow = document.getElementById("down");
  var upArrow = document.getElementById("up");

  if (x.style.display === "none") {
    x.style.display = "block";
    downArrow.style.display = "none";
    upArrow.style.display = "inline";
  } else {
    x.style.display = "none";
    downArrow.style.display = "inline";
    upArrow.style.display = "none";
  }
}

const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
  header.addEventListener("click", function () {
    const accordionContent = header.parentElement.querySelector(".accordion-content");
    let accordionMaxHeight = accordionContent.style.maxHeight;

    if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
      header.querySelector(".fas").classList.remove("fa-plus");
      header.querySelector(".fas").classList.add("fa-minus");
      header.parentElement.classList.add("bg-white");
    } else {
      accordionContent.style.maxHeight = `0px`;
      header.querySelector(".fas").classList.add("fa-plus");
      header.querySelector(".fas").classList.remove("fa-minus");
      header.parentElement.classList.remove("bg-indigo-50");
    }
  });
});