function addProject(data) {
  let projects = document.getElementById("projects");

  let project = document.createElement("div");
  project.className = "col";
  project.innerHTML = `
  <div class="cp-proj-card p-0 h-100">
    <div class="d-flex position-absolute">
      <div class="ca-row-header">${data.title}</div>
      <div id="triangle-topleft"></div>
    </div>
    <div class="cd-proj-card-img p-3">
      <img width="100%" height="300px" src="${data.img}" alt="">
    </div>
    <div class="cd-proj-card-body mx-4 mb-4 px-2">
      <p>${data.desc}</p>
    </div>
    <div class="d-flex justify-content-center mb-3">
      <button class="btn btn-outline-light cp-btn">
        <a href="${data.url}" target="_blank">View Project</a>
      </button>
    </div>
  </div>
  `;

  projects.appendChild(project);
}

let projects = [
  {
    title: "Static Layout",
    img: "./assets/kast.png",
    desc:
      "This is a visual recreation of the Kastapp.co website. It is meant to demonstrate the understanding of CSS properties and layout.",
    url: "https://alexmason.github.io/StaticLayout/",
  },
  {
    title: "CSS Creature",
    img: "./assets/csscreature.png",
    desc:
      "This is a Pokemon creature created entirely by using CSS and HTML. It features an animated moving eye.",
    url: "https://codepen.io/AlexMason/pen/zYomjGL",
  },
  {
    title: "F1 Racing API",
    img: "./assets/F1RacingApp.png",
    desc:
      "A small API project testing the usage of Fetch and ability to manipulate and update the DOM.",
    url: "https://alexmason.github.io/API-Project-1/",
  },
  {
    title: "NASA APOD API",
    img: "./assets/nasaapi.png",
    desc:
      "A project implementing the NASA Astronomy Picture of the Day API to provide an interactive explorer for current and previous photos.",
    url: "https://wd80api2-59733.web.app/",
  },
  {
    title: "Blue Badge",
    img: "https://via.placeholder.com/450?text=Blue%20Badge",
    desc: "This is a placeholder for my blue badge project.",
    url: "",
  },
  {
    title: "Red Badge",
    img: "https://via.placeholder.com/450?text=Red%20Badge",
    desc: "This is a placeholder for my red badge project.",
    url: "",
  },
];

projects.forEach((e) => addProject(e));
