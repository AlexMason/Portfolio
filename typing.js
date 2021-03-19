function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

window.addEventListener("load", async (event) => {
  let name = document.querySelector("[id=typing-name]");
  let nameDefaultText = name.innerText;

  setInterval(() => {
    if (name.innerText.includes("_")) {
      name.innerText = nameDefaultText;
    } else {
      name.innerText = nameDefaultText + "_";
    }
  }, 750);

  //links
  //rebuild links
  let linksElement = document.querySelector("[id=typing-links]");
  let reg = linksElement.innerText.match(/([A-Z])\w+/g);
  let template = "{ Links [] }";

  console.log(linksElement.innerHTML);
});
