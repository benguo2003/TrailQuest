import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    // Copy the board state instead of mutating the existing array
    const boardCopy = [...board];
    
    // If a winner is already declared or the square is already filled, return early
    if (calculateWinner(boardCopy) || boardCopy[index]) {
      return;
    }
    
    // Fill the square with the current player's mark
    boardCopy[index] = isXNext ? 'X' : 'O';
    
    // Update the state
    setBoard(boardCopy);
    setIsXNext(!isXNext);
    
    // Check for a winner
    const winner = calculateWinner(boardCopy);
    if (winner) {
      alert('Winner: ' + winner);
    } else if (boardCopy.every(square => square)) {
      // If all squares are filled and there's no winner, it's a tie
      alert('Tie');
    }
  };

  function calculateWinner(squares) {
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Tic Tac Toe</p>
        <div className="board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </header>
    </div>
  );
}


export default App;
