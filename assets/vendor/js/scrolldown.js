// Check if element exists before adding event listener
const scrollDownElement = document.getElementById("scrollDown");
if (scrollDownElement) {
  scrollDownElement.addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });
}
