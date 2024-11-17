document.getElementById("scrollDown").addEventListener("click", function () {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("year").textContent = new Date().getFullYear();
