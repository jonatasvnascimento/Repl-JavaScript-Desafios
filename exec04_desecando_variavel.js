
let camp1 = document.getElementById('camp1')
let camp2 = document.getElementById('camp2')
let button = document.getElementById('calc')
let result = document.getElementById('result')

function test_string(camp1) {
    let dados = {
        valor: camp1.value,
        tamanho: camp1.value.length,
    }
    return JSON.stringify(dados)
}


button.addEventListener("click", event => {
    let dados = test_string(camp1)
    result.innerHTML = dados
	  event.preventDefault()
})