document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;
      setActiveNavLink();
    });
});

function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("#main-nav a");
  navLinks.forEach((link) => {
    console.log(link.getAttribute("href"), currentPage);
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}
