document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navbar.offsetHeight;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        currentSection = section.id;
      }
    });

    //Following is the code for changing the background-color based on the section

    switch (currentSection) {
      case "home":
        navbar.style.backgroundColor = "#ffcc00";
        break;
      case "about":
        navbar.style.backgroundColor = "#66ccff";
        break;
      case "services":
        navbar.style.backgroundColor = "#38a738";
        break;
      default:
        navbar.style.backgroundColor = "#323131";
        break;
    }
  });
});
