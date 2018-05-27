//Restart the Game
// var restart = document.querySelector('#b');
//
//
// //Grabs all the squares
// var squares = document.querySelectorAll('td button');
//
//
//
// // Clears all the squares
// function clearBoard() {
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].textContent = '';
//     $(h1)
//   }
// }
//
// restart.addEventListener('click',clearBoard);
// Check the square Marker
// function changeMarker() {
//   if (this.textContent === '') {
//     this.textContent = 'X';
//   }else if (this.textContent === 'X') {
//     this.textContent = 'O';
//   }else {
//     this.textContent= '';
//   }
//
// }
//
// for (var i = 0; i < squares.length; i++) {
//   squares[i].addEventListener('click',changeMarker)
// }



//For Loop to add the Event Listeners to all squares
var player1symbol = 'O';
var player2symbol = 'X';

var flag = 0;


var player1 = prompt("Enter Your Name. You Will Be O");
var player2 = prompt("Enter Your Name. You Will Be X");

var table = $('table tr');

function writeXO(rowIndex,colIndex,symbol) {

if(table.eq(rowIndex).find('td').eq(colIndex).find('button').text()===''){
  return(table.eq(rowIndex).find('td').eq(colIndex).find('button').text(symbol));
}
}

function readXO(rowIndex,colIndex) {
    return(table.eq(rowIndex).find('td').eq(colIndex).find('button').text())
}



function markerCheck(one,two,three){
   return(one === two && one === three && one!=='' && one!== undefined)
}

function horizontalWinCheck() {
  var col = 0
  for (var row = 0; row < 3; row++) {
    if(markerCheck(readXO(row,col),readXO(row,col+1),readXO(row,col+2))) {
      return true;
    }else {
      continue;
    }
  }
}

function verticalWinCheck() {
  var row = 0
  for (var col = 0; col < 3; col++) {
    if(markerCheck(readXO(row,col),readXO(row+1,col),readXO(row+2,col))) {
      return true;
    }else {
      continue;
    }
  }
}

function diagonalWinCheck() {

  return(markerCheck(readXO(0,0),readXO(1,1),readXO(2,2)) || markerCheck(readXO(0,2),readXO(1,1),readXO(2,0)));

}

var currentPlayer = 1;
var currentName = player1;
var currentsymbol = player1symbol;


$('h1').text(player1+": it is your turn, please put O wherever you want.");

$('.tic button').on('click',function () {
  if($(this).text()===''){
  var col = $(this).closest('td').index();
  var row = $(this).closest('tr').index();


  writeXO(row,col,currentsymbol);

  if(horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
    console.log('You have won');
    $('h1').text(currentName+' You have won!');
    flag = 1;

  }

  // If no win or tie, continue to next player
  if(flag===0){
  currentPlayer = currentPlayer * -1 ;

  // Re-Check who the current Player is.
  if (currentPlayer === 1) {
    currentName = player1;
    $('h1').text(currentName+": it is your turn, please put O wherever you want.");
    currentsymbol = player1symbol;
  }else {
    currentName = player2
    $('h1').text(currentName+": it is your turn, please put X wherever you want.");
    currentsymbol = player2symbol;
  }
}
}})
