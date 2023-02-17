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

// function readMore(selector, readMoreItem, hideReadMore) {
//   const elementsView = document.querySelectorAll(selector);
//   const elementRead = document.querySelector(readMoreItem);
//   const elementHideReadMore = document.querySelector(hideReadMore);

//   for (let i = 0; i < elementsView.length; i++) {
//     elementsView[i].style.display = "block";
//   }

//   elementRead.style.display = "none";
//   elementHideReadMore.style.display = "block";
// }

// function hideReadMore(selector, readMoreItem, hideReadMore) {
//   const elementsView = document.querySelectorAll(selector);
//   const elementRead = document.querySelector(readMoreItem);
//   const elementHideReadMore = document.querySelector(hideReadMore);

//   for (let i = 0; i < elementsView.length; i++) {
//     elementsView[i].style.display = "none";
//   }

//   elementRead.style.display = "none";
//   elementHideReadMore.style.display = "block";
// }
console.log(hi);

function readMore(selector, readMoreItem, hideReadMore) {
  const elementsView = document.querySelectorAll(selector);
  const elementRead = document.querySelector(readMoreItem);
  const elementHideReadMore = document.querySelector(hideReadMore);

  for (let i = 0; i < elementsView.length; i++) {
    elementsView[i].classList.add("display-slider-view-read-more");
  }

  elementRead.style.display = "none";
  elementHideReadMore.style.display = "block";
}

function hideReadMore(selector, readMoreItem, hideReadMore) {
  const elementsView = document.querySelectorAll(selector);
  const elementRead = document.querySelector(readMoreItem);
  const elementHideReadMore = document.querySelector(hideReadMore);

  for (let i = 0; i < elementsView.length; i++) {
    elementsView[i].classList.remove("display-slider-view-read-more");
  }

  elementRead.style.display = "none";
  elementHideReadMore.style.display = "block";
}
