import React, { useEffect, useState } from "react";
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
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    setData(getNewTable);
  }, []);

  const solveTable = () => {
    const _board = data;
    Solve(_board);
    setData(_board);
    setSolved(true);
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (_board[i][j] === 0) {
          setErr(true);
        }
      }
    }
    function isValid(board, row, col, k) {
      for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + (i % 3);
        if (board[row][i] === k || board[i][col] === k || board[m][n] === k) {
          return false;
        }
      }
      return true;
    }

    function Solve(data) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (data[i][j] === 0) {
            for (let k = 1; k <= 9; k++) {
              if (isValid(data, i, j, k)) {
                data[i][j] = k;
                if (Solve(data)) {
                  return true;
                } else {
                  data[i][j] = 0;
                }
              }
            }
            return false;
          }
        }
      }
      return true;
    }
  };

  const handleReset = () => {
    setData(getNewTable);
    setSolved(false);
    setErr(false);
    console.log("new data");
  };
  const handleChange = (event, row, col) => {
    var newVal = parseInt(event.target.value) || 0,
      NewGrid = data;
    if (newVal === 0 || (newVal >= 1 && newVal <= 9)) {
      NewGrid[row][col] = newVal;
    }
    setData(NewGrid);
  };
  return !solved ? (
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
                      {data.length > 1 ? (
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
                      ) : (
                        <></>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <ButtonWrapper>
        <button onClick={solveTable} className={"button"}>
          Solve
        </button>
        <button onClick={handleReset} className={"button"}>
          Reset
        </button>
      </ButtonWrapper>
    </SudokuTableWraper>
  ) : err ? (
    <SudokuTableWraper>
      {window.alert("No Possible Solution")}
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
                        <div className={"disable"}>X</div>
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
        <button onClick={solveTable} className={"button"}>
          Solve
        </button>
        <button onClick={handleReset} className={"button"}>
          Reset
        </button>
      </ButtonWrapper>
    </SudokuTableWraper>
  ) : (
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
                        <div className={"disable"}>{data[row][col]}</div>
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
        <button onClick={solveTable} className={"button"}>
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
