const body = document.body
const game = document.querySelector(".game")
const div = document.createElement("div")
div.className = "container"
game.append(div)

//criação dos discos e torres 
const torre_inicio = document.createElement("div")
torre_inicio.className = "torre"
div.append(torre_inicio)

const torre_meio = document.createElement("div")
torre_meio.className = "torre"
div.append(torre_meio)

const torre_final = document.createElement("div")
torre_final.className = "torre"
div.append(torre_final)

const pecaRed = document.createElement("div")
pecaRed.className = "red"

const pecaYellow =  document.createElement("div")
pecaYellow.className = "yellow"

const pecaBlue =  document.createElement("div")
pecaBlue.className = "blue"

const pecaGreen = document.createElement("div")
pecaGreen.className = "green"

const pecaPurple = document.createElement("div")
pecaPurple.className = "purple"
 

const reset = document.createElement("button")
reset.className = "reset"
reset.innerText = "Reset"

const box = document.createElement("div")
box.className = "box"
game.append(box)

// niveis de dificuldade
const discosIn = document.createElement("input")
discosIn.type = "number"
discosIn.id = "quantity"
discosIn.value = 
discosIn.min = "3"
discosIn.max = "5"
box.append(discosIn)
box.append(reset)

window.onload = start
reset.addEventListener("click", start)
discosIn.addEventListener("click",start)



function start(){
    
    if (discosIn.value == 3) {
        torre_inicio.innerHTML = ""
        torre_inicio.appendChild(pecaBlue)
        torre_inicio.appendChild(pecaYellow)
        torre_inicio.appendChild(pecaRed)
        counter = 0
        contador.textContent = counter
    
    }

    if (discosIn.value == 4) {
        torre_inicio.innerHTML = ""
        torre_inicio.appendChild(pecaGreen)
        torre_inicio.appendChild(pecaBlue)
        torre_inicio.appendChild(pecaYellow)
        torre_inicio.appendChild(pecaRed)  
        counter = 0
        contador.textContent = counter  
    }

    if (discosIn.value == 5) {
        torre_inicio.innerHTML = ""
        torre_inicio.appendChild(pecaPurple)
        torre_inicio.appendChild(pecaGreen)
        torre_inicio.appendChild(pecaBlue)
        torre_inicio.appendChild(pecaYellow)
        torre_inicio.appendChild(pecaRed)
        counter = 0
        contador.textContent = counter   
    }        
}

//contador de movimento
let counter= 0
let contador = document.createElement("span")
contador.className = "contador"
let movimentos = document.createElement("p")
movimentos.className = "movimentos"
movimentos.innerText = "Movimentos"
box.appendChild(movimentos)
box.append(contador)

// codigo de funcionamento do jogo
const torre = document.querySelectorAll(".torre")
for (let i = 0; i < torre.length; i++) {
    torre[i].addEventListener("click",jogar)   
}

let jogada = true
let peca ;
function jogar(event) {
 let barra = event.currentTarget
     if (jogada) {
         peca = barra.lastElementChild
         jogada = false
    } else if (!jogada) {
        barra = event.currentTarget
        if (barra.lastElementChild === null || barra.lastElementChild.clientWidth > peca.clientWidth) {
        jogada = true
        barra.appendChild(peca)
        counter ++
        contador.textContent = counter
        } if (torre_final.childElementCount == discosIn.value && counter) { 
            let winner = document.createElement("p")
            winner.className = "winner"
            winner.textContent ="Parabéns! Você terminou!!!"
            body.appendChild(winner)
        } if (peca.clientWidth > barra.lastElementChild.clientWidth) {
            jogada = true
        }
    }
}
