//Nav anchoring + scroll START

let nav = document.getElementById("nav");
let navLinks = document.querySelectorAll("#typing-links > a");

document.addEventListener("scroll", () => {
  if (window.scrollY <= 70) {
    nav.classList.remove("pt-3");
    nav.classList.remove("pb-3");
    nav.classList.add("pt-5");
    nav.classList.add("pb-5");
  } else {
    nav.classList.remove("pt-5");
    nav.classList.remove("pb-5");
    nav.classList.add("pt-3");
    nav.classList.add("pb-3");
  }
});

navLinks.forEach((navLink) => {
  navLink.onclick = (e) => {
    e.preventDefault();

    let href = navLink.attributes.href.nodeValue;

    navLinks.forEach((n) => n.classList.remove("active"));
    navLink.classList.add("active");

    if (href !== "" && href.substr(0, 1) === "#") {
      let scrollToElement = document.getElementById(href.substr(1));
      //scrollToElement.scrollIntoView({ behavior: "smooth", block: "center" });
      window.scrollTo({
        top: scrollToElement.offsetTop - 62 - 20,
        behavior: "smooth",
      });
    } else if (href !== "") {
      window.open(href, "_blank");
    }
  };
});
//Nav anchoring + scroll END
