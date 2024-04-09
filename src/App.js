import { useState } from 'react';

export default function Board() {
  //attaches state (null) to each square so board can keep track of
  //which square has been clicked 
  const[squares, setSquares] = useState(Arrays(9).fill(null));

  //the visible game board 
  return (
    <>
  <div className="board-row">
  <Square value={squares[0]}/>
  <Square value={squares[1]}/>
  <Square value={squares[2]}/>
  </div>
  <div className="board-row">
  <Square value={squares[3]}/>
  <Square value={squares[4]}/>
  <Square value={squares[5]}/>
  </div>
  <div className="board-row">
  <Square value={squares[6]}/>
  <Square value={squares[7]}/>
  <Square value={squares[8]}/>
  </div>
  </>
  );
}

//each square receives a value prop that
//will be 'X', 'O', or 'null' for empty squares
function Square({value}){
  return( <button className="square">{value}</button>);

}
