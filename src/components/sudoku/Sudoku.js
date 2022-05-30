import React, { useState, useEffect } from "react";
import SudokuTableWraper from "./Sudoku.style";

function Sudoku() {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function* shuffle(array) {
    var i = array.length;

    while (i--) {
      yield array.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    }
  }

  const getNewArray = () => {
    var arr = new Array(9).fill(0);
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var i = 0; i < 9; i++) {
      arr[i] = getRndInteger(0, 9);
    }
    return arr;
  };
  const getNewTable = () => {
    var test = [];
    for (var i = 0; i < 9; i++) {
      test.push(getNewArray());
    }
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
  useEffect(() => {
    var ranNums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    console.log(ranNums);
  }, []);

  return (
    <SudokuTableWraper>
      <table>
        <tbody>
          {data.map((val) => {
            return (
              <tr>
                {val.map((i) => {
                  return <td>{i}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleClick}>Solve</button>
      <button onClick={handleReset}>reset</button>
    </SudokuTableWraper>
  );
}

export default Sudoku;
