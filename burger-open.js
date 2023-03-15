// реализовано открытие закрытие бургера
const backdrop = document.getElementById("backdrop");
let checkOpen = 0;

function burgerOpen() {
  const containerOpacity = document.querySelector(".container");
  const menuContainer = document.getElementById("burger");

  // 1 - открыт
  if (checkOpen === 0) {
    checkOpen++;
  } else {
    checkOpen--;
  }

  console.log(checkOpen);

  // Для появления заблюренной области
  backdrop.classList.toggle("backdrop--block");

  menuContainer.classList.toggle("open-burger");
  containerOpacity.classList.toggle("container--opacity");
}

backdrop.addEventListener("click", () => {
  burgerOpen();
});
