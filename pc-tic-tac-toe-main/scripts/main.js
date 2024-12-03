const board = document.querySelector('#board')
const mensajeGanador = document.querySelector('#winner')
const arrayBoard = [
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``]
const ganadores = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
board.innerHTML = ""


function cambiarCharts() {

  arrayBoard.forEach((element, i) => {
    let template = `
      <div class="col  g-3" id="${i}">
        <div class="p-2  rounded-4 d-flex align-items-center justify-content-center board_item">
        ${element}
        </div>
      </div>
    `
    board.innerHTML += template
  })
}
cambiarCharts()

function ganador() {
  ganadores.forEach((secuencia) => {
    let g1 = arrayBoard[secuencia[0]]
    let g2 = arrayBoard[secuencia[1]]
    let g3 = arrayBoard[secuencia[2]]

    if (g1 !== "" && g1 === g2 && g2 === g3) {
      mensajeGanador.classList.remove("d-none")
    }
  })
}

board.addEventListener('click', select)

function select(e) {
  const turn = e.target
  const cross = `
          <svg class="icon cross">
            <use xlink:href="./icons/icon-x.svg#icon-x"></use>
          </svg>
          `
          turn.innerHTML = cross
} 




/*let contador = 0
let meromero = false
let turno = 0
while (contador < 9 && !meromero) {
  if (turno === 0) {
    let value = parseInt(prompt("Ingresa la posición en la que deseas jugar"))
    if (arrayBoard[value] === "") {
      arrayBoard[value] = `<svg class="icon cross">
            <use xlink:href="./icons/icon-x.svg#icon-x"></use>
          </svg>`
    }
  }else{
    let position = true
    while (positionbbbuhhhhh) {
      let random = Math.floor(Math.random() = (maxFloored - minCeiled) + minCeiled)

      
    }
  }
  contador++
}*/



/* PRUEBA CON QUERYSELECTORALL
const board = document.querySelectorAll('.board_item')

board.forEach((chart) => {
    chart.addEventListener('click', function () {
        board.innerHTML = ""
        const chart_template = `
          <svg class="icon cross">
            <use xlink:href="./icons/icon-x.svg#icon-x"></use>
          </svg>`
        board.innerHTML = chart_template
    })
})*/

/*PRUEBA UN SOLO CHART (FUNCIONÓ)
const board_item = document.querySelector('.board_item')

board_item.addEventListener('click', function () {
    board_item.innerHTML = ""
    const chart_template = `
          <svg class="icon cross">
            <use xlink:href="./icons/icon-x.svg#icon-x"></use>
          </svg>
    `
    board_item.innerHTML = chart_template
})*/