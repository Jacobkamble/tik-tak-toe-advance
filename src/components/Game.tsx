import React, { useEffect, useState } from "react";
import Board from "./Board";

interface GameProps {
  size?: number;
}

const Game: React.FC<GameProps> = ({ size = 3 }) => {
  const [board, setBoard] = useState<any[]>(Array(size * size).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner,setWinner]=useState<null | string>(null);
  const [isDraw,setIsDraw]=useState<boolean>(false)

//   useEffect(() => {

//     if (winner) {
//       setTimeout(() => {
//         resetBoard();

//       }, 200);
//     }


//   }, [winner]);

  useEffect(() => {
    const winner = calculateWinner(board);

   const draw= board.filter((itm)=>itm).length ===board.length
   if(draw){
    setIsDraw(true)
   }
    if (winner) {
      setWinner(winner);
    }
  }, [board]);

  const resetBoard = () => {
    setBoard(Array(size * size).fill(null));
    setXIsNext(true);
    setWinner(null)
    setIsDraw(false)
  };

  const handleClick = (index: number) => {
    if (calculateWinner(board) || board[index]) {
      return;
    }

    const copy = [...board];
    copy[index] = xIsNext ? "X" : "O";

    setBoard(copy);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (square: any[]): string | null => {
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombination.length; i++) {
      const [a, b, c] = winningCombination[i];

      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }

    return null;
  };



  return (
    <>
      <button onClick={resetBoard}>Reset Game</button>
      <Board size={size} board={board} handleClick={handleClick} />

      {winner && <h1>Winner is {winner}</h1>}
      {isDraw && <h1>Mathch is draw</h1>}
    </>
  );
};

export default Game;
