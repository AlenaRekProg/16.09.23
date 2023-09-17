document.addEventListener("DOMContentLoaded", function() {
  const paragraph = document.getElementById("color-changing-paragraph");
  setInterval(function() {
    if (paragraph.style.color === "red") {
      paragraph.style.color = "green";
    } else {
      paragraph.style.color = "red";
    }
  }, 1000);
});