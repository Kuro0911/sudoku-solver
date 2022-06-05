import React, { useState } from "react";
import SudokuTableWraper, { ButtonWrapper, InputWrapper } from "./Sudoku.style";

function Sudoku() {
  // function getRndInteger(min, max) {
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }

  // const getNewArray = () => {
  //   var arr = new Array(9).fill(0);
  //   for (var i = 0; i < 9; i++) {
  //     arr[i] = getRndInteger(0, 9);
  //   }
  //   return arr;
  // };
  const getNewTable = () => {
    var test = [
      [0, 5, 0, 9, 0, 0, 0, 0, 0],
      [8, 0, 0, 0, 4, 0, 3, 0, 7],
      [0, 0, 0, 2, 8, 0, 1, 9, 0],
      [5, 3, 8, 6, 0, 7, 9, 4, 0],
      [0, 2, 0, 3, 0, 1, 0, 0, 0],
      [1, 0, 9, 8, 0, 4, 6, 2, 3],
      [9, 0, 7, 4, 0, 0, 0, 0, 0],
      [0, 4, 5, 0, 0, 0, 2, 0, 9],
      [0, 0, 0, 0, 3, 0, 0, 7, 0],
    ];
    // for (var i = 0; i < 9; i++) {
    //   test.push(getNewArray());
    // }
    return test;
  };
  const [data, setData] = useState(getNewTable());
  const solveTable = () => {
    console.log(data);
  };

  const handleClick = () => {
    solveTable();
  };
  const handleReset = () => {
    setData(getNewTable());
  };
  const handleChange = (event, row, col) => {
    console.log(event.target.value);
    var newVal = parseInt(event.target.value) || 0,
      NewGrid = data;
    if (newVal === 0 || (newVal >= 1 && newVal <= 9)) {
      NewGrid[row][col] = newVal;
    }
    setData(NewGrid);
  };
  return (
    <SudokuTableWraper>
      <table>
        <tbody>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rInd) => {
            return (
              <tr key={rInd} className={(row + 1) % 3 === 0 ? "bBorder" : ""}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cInd) => {
                  return (
                    <td
                      key={rInd + cInd}
                      className={(col + 1) % 3 === 0 ? "rBorder" : ""}
                    >
                      <InputWrapper>
                        {data[row][col] === 0 ? (
                          <input
                            onChange={(e) => handleChange(e, row, col)}
                            className={"input-wrap"}
                          />
                        ) : (
                          <div className={"disable"}>{data[row][col]}</div>
                        )}
                      </InputWrapper>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <ButtonWrapper>
        <button onClick={handleClick} className={"button"}>
          Solve
        </button>
        <button onClick={handleReset} className={"button"}>
          Reset
        </button>
      </ButtonWrapper>
    </SudokuTableWraper>
  );
}

export default Sudoku;
