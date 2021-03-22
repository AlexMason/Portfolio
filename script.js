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

//Skill slider
skillSlider = {
  fadeOut: () => {
    let firstItem = document.getElementById("skill-slider").children[0];

    let fadeOut = firstItem.animate(
      {
        opacity: [0],
        width: [0],
        height: [0],
        padding: [0],
        marginLeft: [0],
        marginRight: [0],
      },
      2000
    );

    fadeOut.onfinish = () => {
      firstItem.remove();
    };
  },
  fadeIn: (imgSrc, time) => {
    let parent = document.getElementById("skill-slider");
    let li = document.createElement("li");
    let img = document.createElement("img");

    li.className = "ca-skill-slider-item";
    img.src = imgSrc;

    let fadeIn = li.animate(
      {
        opacity: [0, 1],
        width: [0, 150],
        height: [0, 150],
        padding: [0, 10],
        marginLeft: [0, 20],
        marginRight: [0, 20],
      },
      time
    );

    li.appendChild(img);
    parent.appendChild(li);
  },
};

let skillSvgs = [
  "bootstrap",
  "css3",
  "html5",
  "javascript",
  "wordpress",
  "node-dot-js",
  "react",
  "typescript",
  "gatsby",
  "visualstudiocode",
  "git",
  "github",
  "python",
  "java",
  "php",
  "postgresql",
  "mysql",
  "sqlite",
  "linux",
];

let skillSliderIndex = 0;
let skillSliderDefaultItems = 5;

for (let i = 0; i < skillSliderDefaultItems; i++) {
  skillSlider.fadeIn(`./assets/${skillSvgs[skillSliderIndex]}.svg`, 0);
  skillSliderIndex++;
}

setInterval(() => {
  skillSlider.fadeOut();

  if (skillSliderIndex == skillSvgs.length) skillSliderIndex = 0;

  skillSlider.fadeIn(`./assets/${skillSvgs[skillSliderIndex]}.svg`, 2000);

  skillSliderIndex++;
}, 2500);
//Skill slider END
