// реализовано открытие закрытие бургера

function burgerOpen() {
  const containerOpacity = document.querySelector(".container");
  const menuContainer = document.getElementById("burger");
  //   const menuContainer = document.querySelector(".burger");

  //   console.log(menuContainerid);
  //   console.log(menuContainer);
  menuContainer.classList.toggle("open-burger");
  containerOpacity.classList.toggle("container--opacity");
}
