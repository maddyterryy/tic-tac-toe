import { useState } from 'react';

export default function Board() {
  //attaches state (null) to each square so board can keep track of
  //which square has been clicked 
  const[squares, setSquares] = useState(Arrays(9).fill(null));

//creates copy of squares array using .slice() and updates
//the value of an index, then calls setSquares to trigger re-rendering
//of the components that use 'squares' and its child components
function handleClick(i){
const nextSquares = squares.slice();
nextSquares[i] = 'X';
setSquares(nextSquares);
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

//each square receives a value prop that
//will be 'X', 'O', or 'null' for empty squares
function Square({value}){
  return( <button className="square">
    {value}
    </button>);

}
