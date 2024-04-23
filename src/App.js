import { useState } from 'react';

//each square receives a value prop that
//will be 'X', 'O', or 'null' for empty squares
function Square({value, onSquareClick}){
  return( <button className="square" onClick={onSquareClick}>
    {value}
    </button>);

}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  //attaches state (null) to each square so board can keep track of
  //which square has been clicked 
  const[squares, setSquares] = useState(Array(9).fill(null));

//creates copy of squares array using .slice() and updates
//the value of an index, then calls setSquares to trigger re-rendering
//of the components that use 'squares' and its child components
function handleClick(i){
//checks if player has one or has already clicked a square
 if (squares[i] || calculateWinner(squares)){
  return;
 }
const nextSquares = squares.slice();
//xIsNext function will flip depending on whose turn it is
if (xIsNext) {
  nextSquares[i] = "X";
}
else{
  nextSquares[i] = "O";
}
setSquares(nextSquares);
setXIsNext(!xIsNext);
}

//lets players know when game is over or whose turn it is
const winner = calculateWinner(squares);
let status;
if (winner){
  status = "Winner: " + winner;
} else {
  status = "Next player: " + (xIsNext ? "X" : "O");
}
  //the visible game board 
  //added arrow function to onSquareClick which means
  //the code after '=>' will run after square is clicked
  return (
    <>
  <div className="board-row">
  <Square value={squares[0]} onSquareClick={() => handleClick(0)} /> 
  <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
  <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
  </div>
  <div className="board-row">
  <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
  <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
  <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
  </div>
  <div className="board-row">
  <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
  <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
  <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
  </div>
  </>
  );
}

//function that checks for a winner and returns 'x', 'o', or 'null' 
function calculateWinner(squares){
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
for (let i = 0; i < lines.length; i++) {
  const [a, b, c] = lines[i];
  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
    return squares[a];
  }
}
return null;
}
