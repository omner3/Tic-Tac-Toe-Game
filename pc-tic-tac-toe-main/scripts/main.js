const board = document.querySelector('#board')
const mensajeGanador = document.querySelector('#winner')
const nextBtn = document.querySelector('#next')
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



function cambiarCharts() {
  board.innerHTML = ""
  //if (board.innerHTML === "") {
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
    
  //}
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
  });
}

board.addEventListener('click', (e)=>{
  if (e.target.classList.contains('board_item')) {
    select(e)
  }
}
)

function select(e) {
  console.log('cliqueaste');
  const turn = e.target;
  const cross = `
    <svg class="icon cross">
      <use xlink:href="./icons/icon-x.svg#icon-x"></use>
    </svg>`;

  turn.innerHTML = cross;

  const index = e.target.id;
  if (arrayBoard[index] !== "") {
    console.log("La casilla ya está ocupada");
    return;
  }
  arrayBoard[index] = cross;
  cpu();
}



function cpu() {
  let position = true;
  while (position) {
    let random = Math.floor(Math.random() * 9);
    if (arrayBoard[random] === "") {
      arrayBoard[random] =`<svg class="icon circle"> <use xlink:href="./icons/icon-o.svg#icon-o"></use> </svg>`; // Había utilizado innerHTML aquí pero no funcionó para poder ver los movimientos de cpu en el tablero
      position = false;
      console.log(arrayBoard)
    }
    console.log(random)
  }
  //cambiarCharts();
  //ganador();
}


//nextBtn.addEventListener('click', mensajeGanador.classList.add('d-none'))


/*function cpu() {
  let contador = 0
  let winner = false
  let turno = 0
  while (contador < 9 && !winner) {
    if (turno === 0) {
      let value = board.addEventListener('click', select)
      if (arrayBoard[value] === "") {
        arrayBoard[value] = `
          <svg class="icon cross">
            <use xlink:href="./icons/icon-x.svg#icon-x"></use>
          </svg>
          `
        turno = 1
      }
    } else {
      let position = true
      while (position) {
        let random = Math.floor(Math.random() = (9 - 0) + 0)
        if (arrayBoard[random] === "") {
          arrayBoard[random] = `<svg class="icon circle">
            <use xlink:href="./icons/icon-o.svg#icon-o"></use>
          </svg>`
          position = false
          turno = 0
        }
      }
    }
    winner = ganador()
    cambiarCharts()
    contador++
  }
}
cpu() */


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