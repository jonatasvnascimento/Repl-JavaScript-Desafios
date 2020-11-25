
let camp1 = document.getElementById('camp1')
let camp2 = document.getElementById('camp2')
let button = document.getElementById('calc')
let form = document.getElementById('form')
let result = document.getElementById('result')

function sum(camp1, camp2, operator) {
    
    let camp1_v = parseInt(camp1)
    let camp2_v = parseInt(camp2)
    
    switch(operator){
        case '+':
            return camp1_v + camp2_v 
            break
        case '-':
            return camp1_v - camp2_v
            break
        case '*':
            return camp1_v * camp2_v
            break
        case '/':
            return camp1_v / camp2_v
            break
        case '@':
            alert("Bazzinga")
            break
    }
    
}


button.addEventListener("click", event => {
    
    let camp1_value = camp1.value
    let camp2_value = camp2.value
    result.innerHTML = sum(camp1_value, camp2_value, "+")
    
    event.preventDefault()
})