

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
})

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