window.addEventListener("load", async (event) => {
  let name = document.querySelector("[id=typing-name]");
  let nameDefaultText = name.innerHTML;

  setInterval(() => {
    if (window.innerWidth > 960) {
      if (name.innerText.includes("_")) {
        name.innerHTML = nameDefaultText;
      } else {
        name.innerHTML = nameDefaultText + "_";
      }
    } else {
      name.innerHTML = "<span>Alexander Mason</span>";
    }
  }, 750);
});
