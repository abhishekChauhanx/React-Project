import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [winner, setWinner] = useState("");


    function handleClick(index) {
        if (lock || board[index] !== "") return;
        const newBoard = [...board];

        newBoard[index] = count % 2 === 0 ? "X" : "O"

        setBoard(newBoard)
        setCount(count + 1)
        checkWinner(newBoard)
    }


    function checkWinner(data) {
        const winningCode = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 4, 6], [1, 4, 8], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]

        for (let combo of winningCode) {
            let [a, b, c] = combo;

            if (data[a] && data[a] === data[b] && data[b] === data[c]) {
                setWinner(data[a])
                setLock(true)

                return
            }

            if (!data.includes("")) {
                setWinner("Draw")
                setLock(true)
            }
        }

    }


    function reset(){
        setBoard(Array(9).fill(""))
        setCount(0)
        setLock(false)
        setWinner("")
    }



    return (
        <div className="container">
            <h1 className="title">Tic Tac Toe Game</h1>
            {winner && <h2 className="winner">{winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`}</h2>}
            <div className="board">
                {board.map((value, index) => (
                    <div key={index} className="box" onClick={() => handleClick(index)}>
                        <h2>{value}</h2>
                    </div>
                ))}
            </div>
            <button className="again" onClick={reset}>Again</button>
        </div>
    );
};

export default TicTacToe;
