import React, { CSSProperties } from "react";

interface BoardProps {
  size?: number;
  board: any[]

  handleClick:(index:number)=>void
}

const Board: React.FC<BoardProps> = ({ size = 3, board,handleClick }) => {
  return (
    <>

   

    <div  className="board" style={{ "--size": size

     } as CSSProperties}>
        {board.map((val, index) => {
          return <button disabled={board[index]} onClick={()=>handleClick(index)} style={{backgroundColor:"#790d0d",color:"black",fontSize:"20px"}} key={index}>{val}</button>;
        })}
      </div>

    </>
  );
};

export default Board;
