const activePage = window.location.pathname;
// console.log(activePage);
let links = document.querySelectorAll("nav ul li a");
console.log(links);
links.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
