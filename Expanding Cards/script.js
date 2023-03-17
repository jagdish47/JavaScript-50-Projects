const pannels = document.querySelectorAll(".pannel");

pannels.forEach((pannel) => {
  pannel.addEventListener("click", () => {
    removePannelClass();
    pannel.classList.add("active");
  });
});

function removePannelClass() {
  pannels.forEach((pannel) => {
    pannel.classList.remove("active");
  });
}
