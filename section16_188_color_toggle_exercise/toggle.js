var btn = document.querySelector("button");
btn.addEventListener("click", () => {
  var style = document.body.style;
  style.backgroundColor
    = style.backgroundColor != "purple"
    ? "purple" : "white";
});
