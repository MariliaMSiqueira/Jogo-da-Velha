// INICIA VARIÁVEL PLAYER E VENCEDOR NULOS
let player,
  winner = null
let currentPlayer = document.getElementById('current-player')
let currentWinner = document.getElementById('current-winner')

// INVOCA A FUNCTION CHANGEPLAYER COM A VALUE 'X', PARA QUE O INNERHTML DO PRIMEIRO PLAYER SEJA 'X'
changePlayer('X')

// PARA QUE CADA QUADRADO SEJA ÚNICO(ID) AO CLICÁ-LO;
// HTML COM ONCLICK INVOCANDO A FUNCTION CLICKSQUARE PASSANDO COMO PARÂMETRO O THIS.ID DA DIV;
// AO DECLARAR A FUNCTION, É NECESSÁRIO PASSAR O PARÂMETRO ID QUE ESTÁ SENDO REFERENCIADO NO HTML;
// INNERHTML = CONTEÚDO HTML
//

function clickSquare(id) {
  // DECLARADA UMA VARIÁVEL COM O INTUITO DE ARMAZENAR O CLIQUE DO PLAYER
  let square = document.getElementById(id)
  // ESTRUTURA CONDICIONAL PARA VALIDAR  SE O QUADRADO JÁ FOI CLICADO
  // RETURN FINALIZA A FUNCTION
  if (winner !== null) {
    return
  }
  if (square.innerHTML !== '-') {
    return
  }
  square.innerHTML = player
  square.style.color = '#000'

  if (player === 'X') {
    player = 'O'
  } else {
    player = 'X'
  }

  // APÓS CHECAR QUAL O JOGADOR ATUAL E TROCAR O INNERHTML, INVOCA A FUNCTION CHANGEPLAYER COM O PARÂMETRO PLAYER(ATUAL)
  changePlayer(player)
  checkWinner()
}

function changePlayer(value) {
  let currentPlayer = document.getElementById('current-player')
  player = value
  currentPlayer.innerHTML = player
}

function checkWinner() {
  // MAPEAR TODOS OS QUADRADOS ---- PESQUISAR COMO UTILIZAR O MAP() OU FOREACH() NESTE CASO

  let square1 = document.getElementById(1)
  let square2 = document.getElementById(2)
  let square3 = document.getElementById(3)
  let square4 = document.getElementById(4)
  let square5 = document.getElementById(5)
  let square6 = document.getElementById(6)
  let square7 = document.getElementById(7)
  let square8 = document.getElementById(8)
  let square9 = document.getElementById(9)

  if (checkOrder(square1, square2, square3)) {
    changeColorSquare(square1, square2, square3)
    changeWinner(square1)
    return
  }
  if (checkOrder(square4, square5, square6)) {
    changeColorSquare(square4, square5, square6)
    changeWinner(square4)
    return
  }
  if (checkOrder(square7, square8, square9)) {
    changeColorSquare(square7, square8, square9)
    changeWinner(square7)
  }
  if (checkOrder(square1, square4, square7)) {
    changeColorSquare(square1, square4, square7)
    changeWinner(square1)
    return
  }
  if (checkOrder(square2, square5, square8)) {
    changeColorSquare(square2, square5, square8)
    changeWinner(square2)
    return
  }
  if (checkOrder(square3, square6, square9)) {
    changeColorSquare(square3, square6, square9)
    changeWinner(square3)
    return
  }
  if (checkOrder(square1, square5, square9)) {
    changeColorSquare(square1, square5, square9)
    changeWinner(square1)
    return
  }
  if (checkOrder(square3, square5, square7)) {
    changeColorSquare(square3, square5, square7)
    changeWinner(square3)
    return
  }
}

function changeWinner(square) {
  let currentWinner = document.getElementById('current-winner')
  winner = square.innerHTML
  currentWinner.innerHTML = winner
}

function changeColorSquare(square1, square2, square3) {
  square1.style.background = '#6cf368'
  square2.style.background = '#6cf368'
  square3.style.background = '#6cf368'
}
// VALIDAÇÃO DOS CONTEÚDOS .INNERHTML
function checkOrder(square1, square2, square3) {
  let equal = false

  if (
    square1.innerHTML !== '-' &&
    square1.innerHTML === square2.innerHTML &&
    square2.innerHTML === square3.innerHTML
  ) {
    equal = true
  }
  return equal
}

function restart() {
  winner = null
  currentWinner.innerHTML = ''

  for (let i = 1; i <= 9; i++) {
    let square = document.getElementById(i)
    square.style.background = '#eee'
    square.style.color = '#eee'
    square.innerHTML = '-'
  }

  changePlayer('X')
}

// DARK MODE

function changeMode() {
  changeClass()
  changeText()
}

const darkModeClass = 'dark-mode'
const btnChange = document.getElementById('change-mode')
const body = document.getElementsByTagName('body')[0]

function changeClass() {
  body.classList.toggle(darkModeClass)
}

function changeText() {
  if (body.classList.contains(darkModeClass)) {
    btnChange.innerHTML = 'Light-Mode'
  } else {
    btnChange.innerHTML = 'Dark-Mode'
  }
}
btnChange.addEventListener('click', changeMode)
