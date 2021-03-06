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
    let parent = document.getElementById("skill-slider");

    while (parent.children.length > 5) {
      parent.removeChild(parent.firstChild);
    }

    let firstItem = parent.children[0];

    let fadeOut = firstItem.animate(
      {
        opacity: [0],
        width: [0],
        padding: [0],
        margin: [0],
        fontSize: [0],
      },
      2000
    );

    fadeOut.onfinish = () => {
      firstItem.remove();
    };
  },
  fadeIn: (data, time) => {
    let parent = document.getElementById("skill-slider");
    let li = document.createElement("li");
    let img = document.createElement("img");
    let p = document.createElement("p");

    li.className = "ca-skill-slider-item";
    img.src = data.imgSrc;
    p.innerText = data.name;
    p.className = "text-center pt-3";
    p.style.zIndex = "1000";

    let fadeIn = li.animate(
      {
        opacity: [0, 1],
        width: [0, 150],
        padding: [0, 10],
        marginLeft: [0, 20],
        marginRight: [0, 20],
        fontSize: [0, 1],
      },
      time
    );

    li.appendChild(img);
    li.appendChild(p);
    parent.appendChild(li);
  },
};

let skillSvgs = [
  "Bootstrap 5:bootstrap",
  "CSS 3:css3",
  "HTML 5:html5",
  "JavaScript:javascript",
  "WordPress:wordpress",
  "Node.JS:node-dot-js",
  "React.js:react",
  "TypeScript:typescript",
  "Gatsby.js:gatsby",
  "VS Code:visualstudiocode",
  "Git:git",
  "Github:github",
  "Python:python",
  "Java:java",
  "PHP:php",
  "PostgreSQL:postgresql",
  "MySQL:mysql",
  "SQLite:sqlite",
  "Linux:linux",
];

let skillSliderIndex = 0;
let skillSliderDefaultItems = 5;

for (let i = 0; i < skillSliderDefaultItems; i++) {
  let data = {
    name: skillSvgs[skillSliderIndex].split(":")[0],
    imgSrc: `./assets/${skillSvgs[skillSliderIndex].split(":")[1]}.svg`,
  };

  skillSlider.fadeIn(data, 0);
  skillSliderIndex++;
}

setInterval(() => {
  skillSlider.fadeOut();

  if (skillSliderIndex == skillSvgs.length) skillSliderIndex = 0;

  let data = {
    name: skillSvgs[skillSliderIndex].split(":")[0],
    imgSrc: `./assets/${skillSvgs[skillSliderIndex].split(":")[1]}.svg`,
  };

  skillSlider.fadeIn(data, 2000);

  skillSliderIndex++;
}, 5000);
//Skill slider END

//Formspree Submit

let form = document.getElementById("contact-form");

form.onsubmit = (e) => {
  e.preventDefault();

  data = new FormData(e.target);
  let contactModalText = document.getElementById("contactModalText");

  let contactModal = new bootstrap.Modal(
    document.getElementById("contact-modal")
  );

  fetch(e.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => {
      form.reset();

      if (res.status != 200) {
        contactModalText.innerText =
          "Oops!  Something wen't wrong, please try to re-submit again.  Sorry about that!";
      } else {
        contactModalText.innerText =
          "Thank you for reaching out to me, I typically reply back with a response in 24-48 hours.";
      }

      contactModal.show();
    })
    .catch((err) => {
      contactModalText.innerText =
        "Oops!  Something wen't wrong, please try to resubmit again.  Sorry about that!";
      contactModal.show();
    });
};

//footer links
document.getElementById("footer-email").onclick = () => {
  let scrollToElement = document.getElementById("contact");

  window.scrollTo({
    top: scrollToElement.offsetTop - 62 - 20,
    behavior: "smooth",
  });
};

document.getElementById("footer-linkedin").onclick = () => {
  window.open(
    "https://www.linkedin.com/in/alexander-mason-76856346/",
    "_blank"
  );
};

document.getElementById("footer-github").onclick = () => {
  window.open("https://github.com/alexmason", "_blank");
};
