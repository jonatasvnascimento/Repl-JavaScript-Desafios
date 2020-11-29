let camp1 = document.getElementById('camp1')
let camp2 = document.getElementById('camp2')
let button = document.getElementById('calc')
let result = document.getElementById('result')

function soma(camp1) {
  let dobro = parseInt(camp1) * 2
  let triplo = parseInt(camp1) * 3
  let raiz = Math.sqrt(parseFloat(camp1))
  dados = {
    dobro,
    triplo,
    raiz
  }
  return dados
}

button.addEventListener('click', event => {
  let camp1_v = camp1.value
  
  let dados = soma(camp1_v)
  result.innerHTML = ''

  for(let c in dados){
    result.innerHTML += `${c}: `
    result.innerHTML += `${dados[c]}<br>`
  }

  event.preventDefault()
})