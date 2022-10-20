const check = document.getElementById("check");
let btn = document.getElementById("inactivebtn");

check.addEventListener("click", () => {
  console.log(`the button is ${btn}`);
  btn.style.backgroundColor = "#01ffff";
  btn.classList.add("enabledbtn");
});

const isChecked = () => {
  if (check.checked === false) {
  }
};

/*const addBoxShadow = () => {
  btn.classList.toggle("activebtn")
}
check.addEventListener("click", activebtn)
*/
