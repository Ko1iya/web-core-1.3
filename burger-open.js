function burgerOpen() {
  const containerOpacity = document.querySelector(".container");
  const menuContainer = document.getElementById("burger");
  //   const menuContainer = document.querySelector(".burger");

  //   console.log(menuContainerid);
  //   console.log(menuContainer);
  menuContainer.classList.toggle("open");
  containerOpacity.classList.toggle("container--opacity");
}
