window.addEventListener("load", async (event) => {
  let name = document.querySelector("[id=typing-name]");
  let nameDefaultText = name.innerHTML;

  setInterval(() => {
    if (name.innerText.includes("_")) {
      name.innerHTML = nameDefaultText;
    } else {
      name.innerHTML = nameDefaultText + "_";
    }
  }, 750);
});
