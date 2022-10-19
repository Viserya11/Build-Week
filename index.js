const check = document.getElementById("check")
let btn = document.getElementById("button")

btn.disabled = true

function isChecked() {
  if (check.checked) {
    btn.disabled = false
  } else {
    btn.disabled = true
  }
}

function isDisabled() {
  if (btn.disabled) {
    console.log("button is disabled")
  } else {
    console.log("button is active")
  }
}

//btn.addEventListener("click", isDisabled())
