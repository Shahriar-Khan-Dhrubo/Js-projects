const selectFontSize = document.querySelector("#selectFontSize");
const selectBgColor = document.querySelector("#selectBgColor");
const resetButton = document.querySelector("#resetButton");
const mainElement = document.querySelector("main");

//adding listeners
selectFontSize.addEventListener("change", (event) => {
  const selectedFontSize = event.target.value;
  mainElement.style.fontSize = selectedFontSize;
  localStorage.setItem("fontSize", selectedFontSize);
});

selectBgColor.addEventListener("change", (event) => {
  const selectedBgColor = event.target.value;
  mainElement.style.backgroundColor = selectedBgColor;
  localStorage.setItem("bgColor", selectedBgColor);
});

resetButton.addEventListener("click", () => {
  localStorage.removeItem("fontSize");
  localStorage.removeItem("bgColor");
});

//load localStorage values
const setValues = (fontSize, bgColor) => {
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
  };

(() => {
  const fontSize = localStorage.getItem("fontSize");
  const bgColor = localStorage.getItem("bgColor");
  setValues(fontSize, bgColor);
})();


