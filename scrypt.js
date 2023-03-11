if (window.innerWidth < 768) {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    //   // Navigation arrows
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },

    slidesPerView: "auto",

    spaceBetween: 16,
  });
}

// function readMoreBrends(selector, readMoreItem, hideReadMoreBrends) {
//   const elementsView = document.querySelectorAll(selector);
//   const elementRead = document.querySelector(readMoreItem);
//   const elementHideReadMore = document.querySelector(hideReadMoreBrends);

//   for (let i = 0; i < elementsView.length; i++) {
//     elementsView[i].style.display = "block";
//   }

//   elementRead.style.display = "none";
//   elementHideReadMore.style.display = "block";
// }

// function hideReadMoreBrends(selector, readMoreItem, hideReadMoreBrends) {
//   const elementsView = document.querySelectorAll(selector);
//   const elementRead = document.querySelector(readMoreItem);
//   const elementHideReadMore = document.querySelector(hideReadMoreBrends);

//   for (let i = 0; i < elementsView.length; i++) {
//     elementsView[i].style.display = "none";
//   }

//   elementRead.style.display = "none";
//   elementHideReadMore.style.display = "block";
// }

// Эта функция скрытия-раскрытия текста скрытия-раскрытия брендов

function readMoreAbout(selector, readMoreItem, hideReadMoreBrends) {
  const elementsView = document.querySelectorAll(selector); // елемент над которым проводится манипуляция
  const elementRead = document.querySelector(readMoreItem); // кнопки
  const elementHideReadMore = document.querySelector(hideReadMoreBrends); // кнопки

  for (let i = 0; i < elementsView.length; i++) {
    elementsView[i].classList.add("display-about-view-read-more");
  }

  // Изменяет вида кнопки за счет того что один вид скрывается, а другоя становится видимым

  elementRead.style.display = "none";
  elementHideReadMore.style.display = "flex";
}

function hideReadMoreAbout(selector, readMoreItem, hideReadMoreBrends) {
  const elementsView = document.querySelectorAll(selector);
  const elementRead = document.querySelector(readMoreItem);
  const elementHideReadMore = document.querySelector(hideReadMoreBrends);

  for (let i = 0; i < elementsView.length; i++) {
    elementsView[i].classList.remove("display-about-view-read-more");
  }

  elementRead.style.display = "none";
  elementHideReadMore.style.display = "flex";
}

// скрытия-раскрытия брендов ----------------

function readMoreBrends(selector, readMoreItem, hideReadMoreBrends) {
  const elementsView = document.querySelectorAll(selector); // елемент над которым проводится манипуляция
  const elementRead = document.querySelector(readMoreItem); // кнопки
  const elementHideReadMore = document.querySelector(hideReadMoreBrends); // кнопки

  for (let i = 0; i < elementsView.length; i++) {
    elementsView[i].classList.add("display-slider-view-read-more");
  }

  // Изменяет вида кнопки за счет того что один вид скрывается, а другоя становится видимым

  elementRead.style.display = "none";
  elementHideReadMore.style.display = "flex";
}

function hideReadMoreBrends(selector, readMoreItem, hideReadMoreBrends) {
  const elementsView = document.querySelectorAll(selector);
  const elementRead = document.querySelector(readMoreItem);
  const elementHideReadMore = document.querySelector(hideReadMoreBrends);

  for (let i = 0; i < elementsView.length; i++) {
    elementsView[i].classList.remove("display-slider-view-read-more");
  }

  elementRead.style.display = "none";
  elementHideReadMore.style.display = "flex";
}

// Эта функции скрытия типов ремонта

function readMoreTypes() {
  const typesRepairs = document.querySelector(".types-of-repairs");
  console.log(typesRepairs);

  // Кнопка которая изначально видно и кнопка которую не видно
  const buttonVis = document.querySelector(".button-read-hid");
  const buttonHid = document.querySelector(".button-read-vis");

  console.log(buttonHid);

  // Меняю свойства родительского контейнера на wrap для переноса строки чтобы все элементы стало видно

  typesRepairs.classList.add("display-wrap");

  // Одну кнопку скрываю другую показываю
  buttonHid.style.display = "none";
  buttonVis.style.display = "block";
}

function hideReadMoreTypes() {
  const typesRepairs = document.querySelector(".types-of-repairs");
  console.log(typesRepairs);

  // Кнопка которая изначально видно и кнопка которую не видно
  const buttonVis = document.querySelector(".button-read-hid");
  const buttonHid = document.querySelector(".button-read-vis");

  console.log(buttonHid);

  // Меняю свойства родительского контейнера на wrap для переноса строки чтобы все элементы стало видно

  typesRepairs.classList.remove("display-wrap");

  // Одну кнопку скрываю другую показываю
  buttonVis.style.display = "none";
  buttonHid.style.display = "block";
}
