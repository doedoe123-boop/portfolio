document.getElementById("scrollDown").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("year").textContent = new Date().getFullYear();
