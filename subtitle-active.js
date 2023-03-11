var buttons = document.getElementsByClassName("myButton");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("clicked");
    }
    event.target.classList.add("clicked");
  });
}
