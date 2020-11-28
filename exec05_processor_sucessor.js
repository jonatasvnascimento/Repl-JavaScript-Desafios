let camp1 = document.getElementById('camp1')
let camp2 = document.getElementById('camp2')
let button = document.getElementById('calc')
let result = document.getElementById('result')

button.addEventListener('click', event => {
  let sucessor = Number(camp1.value) + 1
  let precessor = Number(camp1.value) - 1

  let list = {
    sucessor,
    precessor
  }

  result.innerHTML = JSON.stringify(list)

  event.preventDefault()
})