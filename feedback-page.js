// let starContainer = document.querySelectorAll(".icon-test");
// console.log(starContainer);

// for (let i = 0; i < starContainer.length; i++) {
//   starContainer[i].addEventListener("mouseover", colorTheStars());
// }
const stars = document.querySelectorAll(".icon-test");
const starWrapper = document.querySelector(".icons");
const inputWrapper = document.querySelector(".comment-area");
const inputField = document.getElementById("input-field");
const proceed = document.getElementById("action-button");
console.log(inputField);

stars.forEach((star, hoveredIndex) => {
  star.addEventListener("mouseover", () => {
    // console.log(`Star of index ${hoveredIndex + 1} was hovered`);
    stars.forEach((star, uncoloredIndex) => {
      if (uncoloredIndex <= hoveredIndex) {
        star.classList.add("hover");
      } else {
        star.classList.remove("hover");
      }
      stars.forEach((star, clickedIndex) => {
        star.addEventListener("click", () => {
          //   console.log(`Star of index ${clickedIndex + 1} was clicked`);
          const rating = `Your rating was ${clickedIndex + 1} out of 10`;
          console.log(rating);
          starWrapper.classList.add("disabled");
          inputWrapper.classList.remove("disabled");
          inputField.addEventListener("input", () => {
            proceed.style.backgroundColor = "#01ffff";
            proceed.classList.add("enabled");
            return window.location.assign("./start.html");
          });
        });
      });
    });
  });
});
