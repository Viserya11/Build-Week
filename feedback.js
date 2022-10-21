const stars = document.querySelectorAll(".icon-test"); //selecting proper IDs
const starWrapper = document.querySelector(".icons");
const inputWrapper = document.querySelector(".comment-area");
const inputField = document.getElementById("input-field");
const proceed = document.getElementById("action-button");
let anchorTag = document.getElementById("anchorTag");
console.log(inputField);

stars.forEach((star, hoveredIndex) => {
  //starting our loop and declaring the hoveredIndex as parameter
  star.addEventListener("mouseover", () => {
    //adding eventlistener for mouseover (for the hover effect)
    console.log(`Star of index ${hoveredIndex + 1} was hovered`); //Here I checked to see if the index that I hover is registered
    stars.forEach((star, uncoloredIndex) => {
      //starting another loop with second parameter: uncoloredIndex
      if (uncoloredIndex <= hoveredIndex) {
        //checking the 2 parameters from above
        star.classList.add("hover");
      } else {
        //adding or removing class accordingly
        star.classList.remove("hover");
      }
      stars.forEach((star, clickedIndex) => {
        //starting another loop and declaring the third parameter clickedIndex
        star.addEventListener("click", () => {
          //adding eventlistener of type click
          const rating = `Your rating was ${clickedIndex + 1} out of 10`; //checking what rating is registered when clicked
          console.log(rating);
          starWrapper.classList.add("disabled"); //disabling the ability to select another rating after you've already clicked
          inputWrapper.classList.remove("disabled"); //allowing the user to type on the input field
          inputField.addEventListener("input", () => {
            //add event listener to see if the user typed something or not
            proceed.style.backgroundColor = "#01ffff"; //changing the color of the button
            anchorTag.classList.remove("disabled");
            proceed.classList.add("enabled"); //adding the hover capabilities as well
          });
        });
      });
    });
  });
});
