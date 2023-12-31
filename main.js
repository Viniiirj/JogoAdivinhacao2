const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", enterScreen)

// Funções callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")
  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 9) {
    alert("Digite um numero entre 0 e 10")
  }
    if (Number(inputNumber.value) == randomNumber) {
      toggleScreen()
      document.querySelector(
        ".screen2 h2"
      ).innerText = `Acertou em ${xAttempts} tentativas`
    }
  if (inputNumber.value != "") {
    xAttempts++
  }

  inputNumber.value = ""
}
function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enterScreen(e) {
if (e.key == "Enter" && screen1.classList.contains("hide")) {
  handleResetClick()
}
}

function enterScreen(e) {
if (e.key == "Enter" && screen1.classList.contains("hide")) {
  handleResetClick()
}
}
