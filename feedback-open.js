const backdropFeedback = document.getElementById("backdrop-feedback");

// статусы переменных которые показывают открыто ли окно
let openCheckMas = 0;
let openCheckCall = 0;

function feedbackOpen() {
  // проверка на открыто ли второе окно, если открыто - закрыть
  if (openCheckCall === 1) {
    feedbackOpenCall();
  }

  // изменение статуса переменной которая показывает открыто ли данное окно
  openCheckMas === 0 ? openCheckMas++ : openCheckMas--;

  const containerOpacity = document.querySelector(".container");
  const menuContainer = document.getElementById("modal-feedback");

  backdropFeedback.classList.toggle("backdrop-feedback--block");

  if (window.innerWidth > 1120) {
    containerOpacity.classList.toggle("container--opacity");
  }

  menuContainer.classList.toggle("open-feedback");
}

backdropFeedback.addEventListener("click", () => {
  feedbackOpen();
});

//
function feedbackOpenCall() {
  // проверка на открыто ли второе окно, если открыто - закрыть
  if (openCheckMas === 1) {
    feedbackOpen();
  }

  // изменение статуса переменной которая показывает открыто ли данное окно
  openCheckCall === 0 ? openCheckCall++ : openCheckCall--;

  const containerOpacity = document.querySelector(".container");
  const menuContainer = document.getElementById("modal-call");

  backdropFeedback.classList.toggle("backdrop-feedback--block");

  if (window.innerWidth > 1120) {
    containerOpacity.classList.toggle("container--opacity");
  }

  menuContainer.classList.toggle("open-feedback");
}
